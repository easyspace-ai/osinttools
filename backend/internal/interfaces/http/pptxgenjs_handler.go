package http

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/easyspace-ai/ylmnote/internal/application/pptxgenjs"
	"github.com/easyspace-ai/ylmnote/internal/application/project"
	projectdomain "github.com/easyspace-ai/ylmnote/internal/domain/project"
	"github.com/easyspace-ai/ylmnote/internal/config"
	"github.com/easyspace-ai/ylmnote/internal/infrastructure/deepseek"
	"github.com/gin-gonic/gin"
)

type PptxgenjsHandler struct {
	projectSvc    *project.Service
	pipeline      *pptxgenjs.Pipeline
	pipelineTotal time.Duration
}

func NewPptxgenjsHandler(cfg *config.Config, projectSvc *project.Service) *PptxgenjsHandler {
	root := config.MonorepoRoot()
	pipelineDir := pptxgenjs.DefaultPipelineDir(root)
	skillDir := pptxgenjs.DefaultSkillDir(root)
	llm := deepseek.NewClient(deepseek.Config{
		APIKey:       cfg.DeepSeek.APIKey,
		BaseURL:      cfg.DeepSeek.BaseURL,
		Model:        cfg.DeepSeek.Model,
		SkillTimeout: time.Duration(cfg.DeepSeek.TimeoutSec) * time.Second,
	})
	stageTimeout := time.Duration(cfg.DeepSeek.PipelineStageTimeoutSec) * time.Second
	totalTimeout := time.Duration(cfg.DeepSeek.PipelineTotalTimeoutSec) * time.Second
	pipe := pptxgenjs.NewPipeline(projectSvc, llm, pptxgenjs.NewPromptLoader(pipelineDir, skillDir), stageTimeout)
	return &PptxgenjsHandler{projectSvc: projectSvc, pipeline: pipe, pipelineTotal: totalTimeout}
}

func (h *PptxgenjsHandler) RegisterRoutes(r *gin.RouterGroup) {
	r.GET("/projects", h.listProjects)
	r.POST("/projects", h.createProject)
	r.GET("/projects/:project_id", h.getProject)
	r.GET("/projects/:project_id/resources", h.listResources)
	r.POST("/projects/:project_id/pipeline/run", h.runPipeline)
	r.POST("/projects/:project_id/pipeline/regenerate", h.regenerate)
}

func (h *PptxgenjsHandler) listProjects(c *gin.Context) {
	u, ok := GetCurrentUser(c)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"detail": "Not authenticated"})
		return
	}
	skip, limit := parseSkipLimit(c)
	all, err := h.projectSvc.ListProjects(u.ID, nil, skip, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"detail": "failed to list projects"})
		return
	}
	filtered := make([]*projectdomain.Project, 0)
	for _, p := range all {
		if pptxgenjs.IsPptxgenjsProject(p.Description) {
			filtered = append(filtered, p)
		}
	}
	c.JSON(http.StatusOK, toProjectListResponse(filtered))
}

func (h *PptxgenjsHandler) getProject(c *gin.Context) {
	u, ok := GetCurrentUser(c)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"detail": "Not authenticated"})
		return
	}
	p, err := h.projectSvc.GetProject(c.Param("project_id"), u.ID)
	if err != nil || !pptxgenjs.IsPptxgenjsProject(p.Description) {
		c.JSON(http.StatusNotFound, gin.H{"detail": "Project not found"})
		return
	}
	c.JSON(http.StatusOK, toProjectResponse(p))
}

func (h *PptxgenjsHandler) createProject(c *gin.Context) {
	u, ok := GetCurrentUser(c)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"detail": "Not authenticated"})
		return
	}

	var req struct {
		Name        string            `json:"name"`
		Markdown    string            `json:"markdown" binding:"required"`
		Preferences map[string]string `json:"preferences"`
		RunPipeline bool              `json:"run_pipeline"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"detail": "invalid request body"})
		return
	}
	md := strings.TrimSpace(req.Markdown)
	if md == "" {
		c.JSON(http.StatusBadRequest, gin.H{"detail": "markdown required"})
		return
	}

	name := strings.TrimSpace(req.Name)
	if name == "" {
		name = pptxgenjs.DeriveTitleFromMD(md)
	}

	prefs := req.Preferences
	if prefs == nil {
		prefs = map[string]string{"theme": "midnight-exec"}
	}

	placeholderDesc := pptxgenjs.ProjectDescription("", prefs)
	p, err := h.projectSvc.CreateProject(c.Request.Context(), u.ID, name, &placeholderDesc, nil)
	if err != nil {
		c.JSON(http.StatusBadGateway, gin.H{"detail": err.Error()})
		return
	}

	sess, err := h.projectSvc.CreateSession(c.Request.Context(), p.ID, name)
	if err != nil {
		c.JSON(http.StatusBadGateway, gin.H{"detail": err.Error()})
		return
	}

	desc := pptxgenjs.ProjectDescription(sess.ID, prefs)
	if _, err := h.projectSvc.UpdateProject(p.ID, u.ID, nil, &desc, nil, nil); err != nil {
		c.JSON(http.StatusBadGateway, gin.H{"detail": err.Error()})
		return
	}
	p.Description = &desc

	content := md
	if _, err := h.projectSvc.CreateResource(p.ID, &sess.ID, "markdown", "source.md", &content, nil, nil); err != nil {
		c.JSON(http.StatusBadGateway, gin.H{"detail": err.Error()})
		return
	}

	resp := gin.H{
		"project":    toProjectResponse(p),
		"session_id": sess.ID,
	}

	if req.RunPipeline {
		pipelineCtx, cancel := context.WithTimeout(c.Request.Context(), h.pipelineTotal)
		defer cancel()
		result, err := h.pipeline.Run(pipelineCtx, u.ID, p.ID, md, prefs, nil)
		if err != nil {
			c.JSON(http.StatusBadGateway, gin.H{"detail": err.Error(), "project": resp})
			return
		}
		resp["pipeline"] = result
	}

	c.JSON(http.StatusOK, resp)
}

func (h *PptxgenjsHandler) listResources(c *gin.Context) {
	u, ok := GetCurrentUser(c)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"detail": "Not authenticated"})
		return
	}
	projectID := c.Param("project_id")
	p, err := h.projectSvc.GetProject(projectID, u.ID)
	if err != nil || !pptxgenjs.IsPptxgenjsProject(p.Description) {
		c.JSON(http.StatusNotFound, gin.H{"detail": "Project not found"})
		return
	}
	list, err := h.projectSvc.ListResources(projectID, nil)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"detail": err.Error()})
		return
	}
	c.JSON(http.StatusOK, toResourceListResponse(list))
}

func (h *PptxgenjsHandler) runPipeline(c *gin.Context) {
	u, ok := GetCurrentUser(c)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"detail": "Not authenticated"})
		return
	}
	projectID := c.Param("project_id")
	p, err := h.projectSvc.GetProject(projectID, u.ID)
	if err != nil || !pptxgenjs.IsPptxgenjsProject(p.Description) {
		c.JSON(http.StatusNotFound, gin.H{"detail": "Project not found"})
		return
	}

	mdType := "markdown"
	resources, err := h.projectSvc.ListResources(projectID, &mdType)
	if err != nil || len(resources) == 0 || resources[0].Content == nil {
		c.JSON(http.StatusBadRequest, gin.H{"detail": "markdown source not found"})
		return
	}
	md := *resources[0].Content
	prefs := pptxgenjs.ParsePreferences(p.Description)

	writeSSE, ok := h.beginPipelineSSE(c)
	if !ok {
		return
	}

	pipelineCtx, cancel := context.WithTimeout(c.Request.Context(), h.pipelineTotal)
	defer cancel()

	result, err := h.pipeline.Run(pipelineCtx, u.ID, projectID, md, prefs, func(ev pptxgenjs.StageEvent) {
		writeSSE(ev)
	})
	if err != nil {
		writeSSE(map[string]string{"stage": "error", "status": "failed", "message": err.Error()})
		return
	}
	writeSSE(map[string]any{"stage": "done", "status": "done", "result": result})
	_, _ = fmt.Fprintf(c.Writer, "data: [DONE]\n\n")
	if flusher, ok := c.Writer.(http.Flusher); ok {
		flusher.Flush()
	}
}

func (h *PptxgenjsHandler) regenerate(c *gin.Context) {
	u, ok := GetCurrentUser(c)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"detail": "Not authenticated"})
		return
	}
	projectID := c.Param("project_id")
	p, err := h.projectSvc.GetProject(projectID, u.ID)
	if err != nil || !pptxgenjs.IsPptxgenjsProject(p.Description) {
		c.JSON(http.StatusNotFound, gin.H{"detail": "Project not found"})
		return
	}

	var req struct {
		Instruction string `json:"instruction" binding:"required"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"detail": "invalid request body"})
		return
	}

	writeSSE, ok := h.beginPipelineSSE(c)
	if !ok {
		return
	}

	pipelineCtx, cancel := context.WithTimeout(c.Request.Context(), h.pipelineTotal)
	defer cancel()

	result, err := h.pipeline.Regenerate(pipelineCtx, u.ID, projectID, req.Instruction, func(ev pptxgenjs.StageEvent) {
		writeSSE(ev)
	})
	if err != nil {
		writeSSE(map[string]string{"stage": "error", "status": "failed", "message": err.Error()})
		return
	}
	writeSSE(map[string]any{"stage": "done", "status": "done", "result": result})
	_, _ = fmt.Fprintf(c.Writer, "data: [DONE]\n\n")
	if flusher, ok := c.Writer.(http.Flusher); ok {
		flusher.Flush()
	}
}

func (h *PptxgenjsHandler) beginPipelineSSE(c *gin.Context) (func(any), bool) {
	c.Header("Content-Type", "text/event-stream")
	c.Header("Cache-Control", "no-cache")
	c.Header("Connection", "keep-alive")
	c.Header("X-Accel-Buffering", "no")

	flusher, ok := c.Writer.(http.Flusher)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"detail": "streaming not supported"})
		return nil, false
	}

	writeSSE := func(payload any) {
		raw, _ := json.Marshal(payload)
		_, _ = fmt.Fprintf(c.Writer, "data: %s\n\n", raw)
		flusher.Flush()
	}
	return writeSSE, true
}
