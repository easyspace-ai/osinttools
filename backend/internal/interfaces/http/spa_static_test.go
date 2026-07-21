package http

import (
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"testing"

	"github.com/gin-gonic/gin"
)

func TestIsStaticAssetRequest(t *testing.T) {
	t.Parallel()
	cases := []struct {
		path string
		want bool
	}{
		{"/assets/monaco-abc.js", true},
		{"/assets/main-xyz.css", true},
		{"assets/three-1.js", true},
		{"/favicon.svg", true},
		{"/ai-session/foo", false},
		{"/", false},
		{"/studio/project/1", false},
	}
	for _, tc := range cases {
		if got := isStaticAssetRequest(tc.path); got != tc.want {
			t.Fatalf("isStaticAssetRequest(%q)=%v want %v", tc.path, got, tc.want)
		}
	}
}

func TestServeSPA_MissingAssetReturns404NotHTML(t *testing.T) {
	gin.SetMode(gin.TestMode)
	root := t.TempDir()
	if err := os.WriteFile(filepath.Join(root, "index.html"), []byte("<html>spa</html>"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.MkdirAll(filepath.Join(root, "assets"), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(root, "assets", "main-ok.js"), []byte("export default 1"), 0o644); err != nil {
		t.Fatal(err)
	}

	t.Setenv("STATIC_DIR", root)
	staticRootOnce = sync.Once{}
	staticRootVal = ""

	r := gin.New()
	r.NoRoute(serveSPA)

	w := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "/assets/main-ok.js", nil)
	r.ServeHTTP(w, req)
	if w.Code != http.StatusOK {
		t.Fatalf("existing asset: status %d", w.Code)
	}

	w = httptest.NewRecorder()
	req = httptest.NewRequest(http.MethodGet, "/assets/monaco-missing.js", nil)
	r.ServeHTTP(w, req)
	if w.Code != http.StatusNotFound {
		t.Fatalf("missing asset: status %d body %q", w.Code, w.Body.String())
	}
	if body := w.Body.String(); strings.Contains(body, "<html") {
		t.Fatalf("missing asset must not return HTML fallback, got %q", body)
	}

	w = httptest.NewRecorder()
	req = httptest.NewRequest(http.MethodGet, "/ai-session/demo", nil)
	r.ServeHTTP(w, req)
	if w.Code != http.StatusOK {
		t.Fatalf("spa route: status %d", w.Code)
	}
	if body := w.Body.String(); body != "<html>spa</html>" {
		t.Fatalf("spa route body=%q", body)
	}
}
