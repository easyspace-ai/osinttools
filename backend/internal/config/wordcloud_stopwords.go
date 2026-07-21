package config

import (
	"os"
	"path/filepath"
	"strings"
)

// ResolveWordcloudStopwordsPath 词云停用词 JSON：WORDCLOUD_STOPWORDS_PATH 或仓库 data/dashboard/wordcloud-stopwords.json
func ResolveWordcloudStopwordsPath(override string) string {
	if p := filepath.Clean(strings.TrimSpace(override)); p != "" && p != "." {
		return p
	}
	if wd, err := os.Getwd(); err == nil {
		if root := monorepoRoot(wd); root != "" {
			return filepath.Join(root, "data", "dashboard", "wordcloud-stopwords.json")
		}
	}
	return filepath.Join("data", "dashboard", "wordcloud-stopwords.json")
}
