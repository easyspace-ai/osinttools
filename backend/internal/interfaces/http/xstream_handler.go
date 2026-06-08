package http

import (
	"database/sql"
	"log/slog"
	"strconv"

	"github.com/easyspace-ai/ylmnote/internal/application/xstream"
	"github.com/easyspace-ai/ylmnote/internal/infrastructure/persistence"
	"github.com/easyspace-ai/ylmnote/internal/worker"
	"github.com/gin-gonic/gin"
	"github.com/riverqueue/river"
)

// XStreamHandler handles X stream HTTP endpoints.
type XStreamHandler struct {
	repo        *persistence.XStreamRepository
	fetcher     *xstream.Fetcher
	riverClient *river.Client[*sql.Tx]
}

func NewXStreamHandler(repo *persistence.XStreamRepository, fetcher *xstream.Fetcher, riverClient *river.Client[*sql.Tx]) *XStreamHandler {
	return &XStreamHandler{
		repo:        repo,
		fetcher:     fetcher,
		riverClient: riverClient,
	}
}

func (h *XStreamHandler) ListGET(c *gin.Context) {
	limitStr := c.Query("limit")
	offsetStr := c.Query("offset")

	limit := 50
	offset := 0

	if limitStr != "" {
		if l, err := strconv.Atoi(limitStr); err == nil && l > 0 && l <= 100 {
			limit = l
		}
	}

	if offsetStr != "" {
		if o, err := strconv.Atoi(offsetStr); err == nil && o >= 0 {
			offset = o
		}
	}

	itemType := c.Query("type")
	resp, err := h.repo.GetResponse(limit, offset, itemType)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, resp)
}

func (h *XStreamHandler) ListSinceGET(c *gin.Context) {
	sinceIdStr := c.Query("sinceId")
	limitStr := c.Query("limit")

	sinceId := int64(0)
	if sinceIdStr != "" {
		if s, err := strconv.ParseInt(sinceIdStr, 10, 64); err == nil && s >= 0 {
			sinceId = s
		}
	}

	limit := 1000
	if limitStr != "" {
		if l, err := strconv.Atoi(limitStr); err == nil && l > 0 && l <= 1000 {
			limit = l
		}
	}

	itemType := c.Query("type")
	slog.Info("XStream since", slog.Int64("sinceId", sinceId), slog.Int("limit", limit), slog.String("type", itemType))

	resp, err := h.repo.GetResponseSince(sinceId, limit, itemType)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, resp)
}

func (h *XStreamHandler) LatestIdGET(c *gin.Context) {
	maxID, err := h.repo.GetLatestID()
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"latestId": maxID})
}

func (h *XStreamHandler) TriggerGET(c *gin.Context) {
	if h.riverClient != nil {
		if _, err := h.riverClient.Insert(c.Request.Context(), worker.XStreamSyncArgs{}, nil); err != nil {
			slog.Warn("xstream trigger: river insert failed, falling back to direct fetch", slog.Any("err", err))
			if h.fetcher == nil {
				c.JSON(500, gin.H{"error": err.Error()})
				return
			}
			if fetchErr := h.fetcher.FetchOnce(c.Request.Context()); fetchErr != nil {
				c.JSON(500, gin.H{"error": fetchErr.Error()})
				return
			}
			c.JSON(200, gin.H{"status": "fetched", "mode": "direct"})
			return
		}
	} else if h.fetcher != nil {
		if err := h.fetcher.FetchOnce(c.Request.Context()); err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		c.JSON(200, gin.H{"status": "fetched", "mode": "direct"})
		return
	}
	c.JSON(200, gin.H{"status": "triggered"})
}

func (h *XStreamHandler) InitPOST(c *gin.Context) {
	if h.fetcher == nil {
		c.JSON(500, gin.H{"error": "fetcher not available"})
		return
	}
	if h.fetcher.IsInitRunning() {
		c.JSON(409, gin.H{"error": "initialization already running"})
		return
	}
	if err := h.fetcher.StartInitialize(false); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(202, gin.H{"status": "started"})
}

func (h *XStreamHandler) InitStatusGET(c *gin.Context) {
	if h.fetcher == nil {
		c.JSON(500, gin.H{"error": "fetcher not available"})
		return
	}
	c.JSON(200, h.fetcher.GetInitProgress())
}

func (h *XStreamHandler) RegisterRoutes(g *gin.RouterGroup) {
	g.GET("/items", h.ListGET)
	g.GET("/since", h.ListSinceGET)
	g.GET("/latest-id", h.LatestIdGET)
	g.GET("/trigger", h.TriggerGET)
	g.POST("/init", h.InitPOST)
	g.GET("/init/status", h.InitStatusGET)
}
