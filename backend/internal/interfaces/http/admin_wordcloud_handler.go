package http

import (
	"net/http"

	"github.com/easyspace-ai/ylmnote/internal/application/dashboard"
	"github.com/gin-gonic/gin"
)

// AdminWordCloudHandler manages editable wordcloud stopwords.
type AdminWordCloudHandler struct {
	wordCloud *dashboard.WordCloudService
}

func NewAdminWordCloudHandler(wordCloud *dashboard.WordCloudService) *AdminWordCloudHandler {
	return &AdminWordCloudHandler{wordCloud: wordCloud}
}

func (h *AdminWordCloudHandler) RegisterRoutes(r *gin.RouterGroup) {
	r.GET("/wordcloud/stopwords", h.stopwordsGET)
	r.PUT("/wordcloud/stopwords", h.stopwordsPUT)
}

func (h *AdminWordCloudHandler) stopwordsGET(c *gin.Context) {
	if h.wordCloud == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "word cloud not configured"})
		return
	}
	c.JSON(http.StatusOK, h.wordCloud.GetStopwords())
}

type stopwordsPutRequest struct {
	Version int      `json:"version"`
	Words   []string `json:"words"`
}

func (h *AdminWordCloudHandler) stopwordsPUT(c *gin.Context) {
	if h.wordCloud == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "word cloud not configured"})
		return
	}
	var req stopwordsPutRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid json: " + err.Error()})
		return
	}
	if req.Words == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "words is required"})
		return
	}
	doc, err := h.wordCloud.SaveStopwords(req.Words)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, doc)
}
