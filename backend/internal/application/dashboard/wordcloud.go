package dashboard

import (
	"context"
	"encoding/json"
	"errors"
	"log/slog"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
	"sync"
	"time"
	"unicode"

	"github.com/easyspace-ai/ylmnote/internal/infrastructure/persistence"
	"github.com/go-ego/gse"
)

const (
	wordCloudTopN     = 80
	wordCloudMaxRows  = 5000
	wordCloudCacheTTL = 10 * time.Minute
)

var (
	latinWordRe = regexp.MustCompile(`[a-zA-Z]{2,}`)
)

// builtinStopwords are always merged with the JSON file list for filtering.
var builtinStopwords = map[string]struct{}{
	"the": {}, "and": {}, "for": {}, "are": {}, "but": {}, "not": {}, "you": {}, "all": {},
	"can": {}, "had": {}, "her": {}, "was": {}, "one": {}, "our": {}, "out": {}, "has": {},
	"his": {}, "how": {}, "its": {}, "may": {}, "new": {}, "now": {}, "old": {}, "see": {},
	"two": {}, "way": {}, "who": {}, "did": {}, "get": {}, "let": {}, "put": {}, "say": {},
	"she": {}, "too": {}, "use": {}, "that": {}, "with": {}, "have": {}, "this": {}, "will": {},
	"your": {}, "from": {}, "they": {}, "been": {}, "than": {}, "what": {}, "when": {}, "were": {},
	"says": {}, "said": {}, "into": {}, "over": {}, "after": {}, "before": {}, "about": {},
	"more": {}, "also": {}, "just": {}, "only": {}, "some": {}, "such": {}, "them": {},
	"then": {}, "there": {}, "these": {}, "those": {}, "through": {}, "under": {}, "while": {},
	"amp": {}, "gt": {}, "lt": {}, "quot": {}, "nbsp": {}, "ndash": {},
	"of": {}, "to": {}, "on": {}, "in": {}, "is": {}, "a": {}, "an": {}, "be": {}, "as": {},
	"at": {}, "by": {}, "or": {}, "if": {}, "it": {}, "so": {}, "no": {}, "do": {}, "we": {},
	"he": {}, "me": {}, "my": {}, "up": {},
	"https": {}, "http": {}, "com": {}, "www": {}, "html": {}, "co": {},
	"tco": {}, "twitter": {}, "xcom": {}, "htm": {}, "php": {}, "asp": {},
	"js": {}, "css": {}, "png": {}, "jpg": {}, "jpeg": {}, "gif": {},
	"pdf": {}, "doc": {}, "docx": {}, "txt": {}, "xml": {}, "json": {},
	"org": {}, "net": {}, "gov": {}, "edu": {}, "mil": {}, "int": {},
	"的": {}, "了": {}, "在": {}, "是": {}, "和": {}, "与": {}, "及": {}, "或": {}, "等": {},
	"这": {}, "那": {}, "有": {}, "被": {}, "把": {}, "从": {}, "到": {}, "为": {}, "也": {},
	"就": {}, "都": {}, "而": {}, "但": {}, "可以": {}, "一个": {}, "没有": {}, "什么": {},
	"怎么": {}, "这个": {}, "那个": {}, "我们": {}, "他们": {}, "你们": {}, "自己": {},
	"因为": {}, "所以": {}, "如果": {}, "但是": {},
}

type WordCloudGroup string

const (
	GroupCountry  WordCloudGroup = "country"
	GroupPerson   WordCloudGroup = "person"
	GroupLocation WordCloudGroup = "location"
	GroupMilitary WordCloudGroup = "military"
	GroupPolitics WordCloudGroup = "politics"
	GroupEconomy  WordCloudGroup = "economy"
	GroupDisaster WordCloudGroup = "disaster"
	GroupGeneral  WordCloudGroup = "general"
)

type WordCloudWord struct {
	Text   string         `json:"text"`
	Weight int            `json:"weight"`
	Group  WordCloudGroup `json:"group"`
}

type WordCloudResult struct {
	Words       []WordCloudWord `json:"words"`
	ItemCount   int             `json:"itemCount"`
	GeneratedAt string          `json:"generatedAt"`
}

// StopwordsFile is the on-disk / API shape for editable stopwords.
type StopwordsFile struct {
	Version int      `json:"version"`
	Words   []string `json:"words"`
}

type wordCloudCacheEntry struct {
	result    WordCloudResult
	expiresAt time.Time
}

type WordCloudService struct {
	xstreamRepo    *persistence.XStreamRepository
	segmenter      gse.Segmenter
	stopwordsPath  string
	mu             sync.Mutex
	cache          map[string]*wordCloudCacheEntry // keyed by item type; "" = global
	fileStopwords  map[string]struct{}
	fileVersion    int
	fileWordsOrder []string // preserved order from JSON for admin GET
}

func NewWordCloudService(xstreamRepo *persistence.XStreamRepository, stopwordsPath string) *WordCloudService {
	var seg gse.Segmenter
	if err := seg.LoadDictEmbed("zh"); err != nil {
		slog.Warn("[WordCloud] LoadDictEmbed zh failed, using default", slog.String("error", err.Error()))
		_ = seg.LoadDict()
	}
	_ = seg.LoadStopEmbed()
	s := &WordCloudService{
		xstreamRepo:   xstreamRepo,
		segmenter:     seg,
		stopwordsPath: strings.TrimSpace(stopwordsPath),
		cache:         make(map[string]*wordCloudCacheEntry),
		fileStopwords: make(map[string]struct{}),
		fileVersion:   1,
	}
	if err := s.reloadStopwords(); err != nil {
		slog.Warn("[WordCloud] load stopwords failed, using builtin only",
			slog.String("path", s.stopwordsPath),
			slog.String("error", err.Error()),
		)
	}
	return s
}

func (s *WordCloudService) StopwordsPath() string {
	return s.stopwordsPath
}

// Generate builds a word cloud for the last 24h. itemType filters stream type; empty = all.
// refresh clears that type's cache and reloads stopwords from disk.
func (s *WordCloudService) Generate(ctx context.Context, refresh bool, itemType string) (WordCloudResult, error) {
	_ = ctx
	itemType = strings.TrimSpace(itemType)

	if refresh {
		if err := s.reloadStopwords(); err != nil {
			slog.Warn("[WordCloud] reload stopwords on refresh failed",
				slog.String("error", err.Error()),
			)
		}
		s.mu.Lock()
		delete(s.cache, itemType)
		s.mu.Unlock()
	}

	s.mu.Lock()
	if entry, ok := s.cache[itemType]; ok && time.Now().Before(entry.expiresAt) {
		r := entry.result
		s.mu.Unlock()
		return r, nil
	}
	s.mu.Unlock()

	if s.xstreamRepo == nil {
		return WordCloudResult{}, nil
	}

	contents, err := s.xstreamRepo.ListContentSince24h(wordCloudMaxRows, itemType)
	if err != nil {
		return WordCloudResult{}, err
	}

	slog.Info("[WordCloud] loaded contents from database",
		slog.Int("count", len(contents)),
		slog.String("type", itemType),
	)

	freq := s.countWords(contents)
	words := topWords(freq, wordCloudTopN)

	result := WordCloudResult{
		Words:       words,
		ItemCount:   len(contents),
		GeneratedAt: time.Now().UTC().Format(time.RFC3339),
	}

	s.mu.Lock()
	s.cache[itemType] = &wordCloudCacheEntry{result: result, expiresAt: time.Now().Add(wordCloudCacheTTL)}
	s.mu.Unlock()

	return result, nil
}

// GetStopwords returns the editable stopwords document (file contents, or builtin defaults if missing).
func (s *WordCloudService) GetStopwords() StopwordsFile {
	s.mu.Lock()
	defer s.mu.Unlock()
	if len(s.fileWordsOrder) > 0 {
		words := make([]string, len(s.fileWordsOrder))
		copy(words, s.fileWordsOrder)
		return StopwordsFile{Version: s.fileVersion, Words: words}
	}
	return StopwordsFile{Version: 1, Words: builtinStopwordsSorted()}
}

// SaveStopwords writes the full stopwords table to disk, reloads, and clears all caches.
func (s *WordCloudService) SaveStopwords(words []string) (StopwordsFile, error) {
	if s.stopwordsPath == "" {
		return StopwordsFile{}, errors.New("stopwords path not configured")
	}
	normalized := normalizeStopwords(words)
	doc := StopwordsFile{Version: 1, Words: normalized}

	data, err := json.MarshalIndent(doc, "", "  ")
	if err != nil {
		return StopwordsFile{}, err
	}
	data = append(data, '\n')

	if err := os.MkdirAll(filepath.Dir(s.stopwordsPath), 0o755); err != nil {
		return StopwordsFile{}, err
	}
	tmp := s.stopwordsPath + ".tmp"
	if err := os.WriteFile(tmp, data, 0o644); err != nil {
		return StopwordsFile{}, err
	}
	if err := os.Rename(tmp, s.stopwordsPath); err != nil {
		_ = os.Remove(tmp)
		return StopwordsFile{}, err
	}

	s.mu.Lock()
	s.applyStopwordsLocked(doc)
	s.cache = make(map[string]*wordCloudCacheEntry)
	s.mu.Unlock()

	slog.Info("[WordCloud] stopwords saved",
		slog.String("path", s.stopwordsPath),
		slog.Int("count", len(normalized)),
	)
	return doc, nil
}

// ClearCache drops all type-keyed wordcloud caches.
func (s *WordCloudService) ClearCache() {
	s.mu.Lock()
	s.cache = make(map[string]*wordCloudCacheEntry)
	s.mu.Unlock()
}

func (s *WordCloudService) reloadStopwords() error {
	if s.stopwordsPath == "" {
		return errors.New("empty stopwords path")
	}
	data, err := os.ReadFile(s.stopwordsPath)
	if err != nil {
		if os.IsNotExist(err) {
			s.mu.Lock()
			s.fileStopwords = make(map[string]struct{})
			s.fileWordsOrder = nil
			s.fileVersion = 1
			s.mu.Unlock()
			return nil
		}
		return err
	}
	var doc StopwordsFile
	if err := json.Unmarshal(data, &doc); err != nil {
		return err
	}
	if doc.Version == 0 {
		doc.Version = 1
	}
	doc.Words = normalizeStopwords(doc.Words)
	s.mu.Lock()
	s.applyStopwordsLocked(doc)
	s.mu.Unlock()
	return nil
}

func (s *WordCloudService) applyStopwordsLocked(doc StopwordsFile) {
	m := make(map[string]struct{}, len(doc.Words))
	order := make([]string, 0, len(doc.Words))
	for _, w := range doc.Words {
		if _, ok := m[w]; ok {
			continue
		}
		m[w] = struct{}{}
		order = append(order, w)
	}
	s.fileStopwords = m
	s.fileWordsOrder = order
	s.fileVersion = doc.Version
}

func normalizeStopwords(words []string) []string {
	seen := make(map[string]struct{}, len(words))
	out := make([]string, 0, len(words))
	for _, raw := range words {
		w := strings.TrimSpace(raw)
		if w == "" {
			continue
		}
		if isASCIIWord(w) {
			w = strings.ToLower(w)
		}
		if _, ok := seen[w]; ok {
			continue
		}
		seen[w] = struct{}{}
		out = append(out, w)
	}
	return out
}

func isASCIIWord(w string) bool {
	for _, r := range w {
		if r > unicode.MaxASCII {
			return false
		}
	}
	return true
}

func builtinStopwordsSorted() []string {
	out := make([]string, 0, len(builtinStopwords))
	for w := range builtinStopwords {
		out = append(out, w)
	}
	sort.Strings(out)
	return out
}

// countWords 统计词频并分类
type wordFreq struct {
	weight int
	group  WordCloudGroup
}

func (s *WordCloudService) countWords(contents []string) map[string]wordFreq {
	freq := make(map[string]wordFreq)
	for _, text := range contents {
		text = strings.TrimSpace(text)
		if text == "" {
			continue
		}
		// Latin words
		for _, w := range latinWordRe.FindAllString(text, -1) {
			w = strings.ToLower(w)
			if len(w) < 2 || s.isFiltered(w) {
				continue
			}
			f := freq[w]
			f.weight++
			f.group = classifyWord(w)
			freq[w] = f
		}
		// Chinese tokens
		for _, w := range s.segmenter.CutSearch(text, true) {
			w = strings.TrimSpace(w)
			if !isValidChineseToken(w) || s.isFiltered(w) {
				continue
			}
			f := freq[w]
			f.weight++
			f.group = classifyWord(w)
			freq[w] = f
		}
	}
	return freq
}

func (s *WordCloudService) isFiltered(w string) bool {
	if _, ok := builtinStopwords[w]; ok {
		return true
	}
	s.mu.Lock()
	_, ok := s.fileStopwords[w]
	s.mu.Unlock()
	return ok
}

func isValidChineseToken(w string) bool {
	if w == "" || len([]rune(w)) < 2 {
		return false
	}
	hasHan := false
	for _, r := range w {
		if unicode.Is(unicode.Han, r) {
			hasHan = true
			continue
		}
		if !unicode.IsLetter(r) && !unicode.IsNumber(r) {
			return false
		}
	}
	return hasHan
}

func classifyWord(w string) WordCloudGroup {
	lw := strings.ToLower(w)
	if _, ok := countrySet[lw]; ok {
		return GroupCountry
	}
	if _, ok := personSet[lw]; ok {
		return GroupPerson
	}
	if _, ok := locationSet[lw]; ok {
		return GroupLocation
	}
	if _, ok := militarySet[lw]; ok {
		return GroupMilitary
	}
	if _, ok := politicsSet[lw]; ok {
		return GroupPolitics
	}
	if _, ok := economySet[lw]; ok {
		return GroupEconomy
	}
	if _, ok := disasterSet[lw]; ok {
		return GroupDisaster
	}
	return GroupGeneral
}

var countrySet = map[string]struct{}{
	"china": {}, "chinese": {}, "russia": {}, "russian": {}, "america": {}, "american": {}, "usa": {},
	"iran": {}, "israel": {}, "palestine": {}, "ukraine": {}, "ukrainian": {},
	"india": {}, "pakistan": {}, "north korea": {}, "south korea": {}, "korea": {},
	"japan": {}, "germany": {}, "france": {}, "britain": {}, "uk": {},
	"turkey": {}, "syria": {}, "lebanon": {}, "egypt": {}, "saudi": {},
	"yemen": {}, "iraq": {}, "afghanistan": {}, "taiwan": {}, "vietnam": {},
	"nato": {}, "eu": {}, "un": {}, "asean": {}, "african": {}, "africa": {},
	"european": {}, "asia": {}, "asian": {}, "middle east": {},
	"中国": {}, "俄罗斯": {}, "美国": {}, "伊朗": {}, "以色列": {},
	"巴勒斯坦": {}, "乌克兰": {}, "印度": {}, "巴基斯坦": {}, "朝鲜": {},
	"韩国": {}, "日本": {}, "德国": {}, "法国": {}, "英国": {},
	"土耳其": {}, "叙利亚": {}, "黎巴嫩": {}, "埃及": {}, "沙特": {},
	"也门": {}, "伊拉克": {}, "阿富汗": {}, "台湾": {}, "越南": {},
	"北约": {}, "欧盟": {}, "联合国": {}, "东盟": {}, "非洲": {},
	"欧洲": {}, "亚洲": {}, "中东": {},
}

var personSet = map[string]struct{}{
	"trump": {}, "biden": {}, "putin": {}, "netanyahu": {}, "xi": {},
	"zelensky": {}, "kim": {}, "modi": {}, "erdogan": {}, "assad": {},
	"macron": {}, "scholz": {}, "sunak": {}, "starmer": {},
	"特朗普": {}, "拜登": {}, "普京": {}, "内塔尼亚胡": {}, "习近平": {},
	"泽连斯基": {}, "金正恩": {}, "莫迪": {}, "埃尔多安": {}, "阿萨德": {},
	"马克龙": {}, "朔尔茨": {}, "苏纳克": {}, "斯塔默": {},
}

var locationSet = map[string]struct{}{
	"beijing": {}, "moscow": {}, "washington": {}, "tehran": {}, "tel aviv": {},
	"kyiv": {}, "gaza": {}, "damascus": {}, "istanbul": {}, "cairo": {},
	"baghdad": {}, "kabul": {}, "hanoi": {}, "taipei": {}, "tokyo": {},
	"北京": {}, "莫斯科": {}, "华盛顿": {}, "德黑兰": {}, "特拉维夫": {},
	"基辅": {}, "加沙": {}, "大马士革": {}, "伊斯坦布尔": {}, "开罗": {},
	"巴格达": {}, "喀布尔": {}, "河内": {}, "台北": {}, "东京": {},
}

var militarySet = map[string]struct{}{
	"army": {}, "navy": {}, "air force": {}, "missile": {}, "drone": {},
	"strike": {}, "attack": {}, "war": {}, "conflict": {}, "battle": {},
	"invasion": {}, "defense": {}, "weapon": {}, "nuclear": {}, "military": {},
	"force": {}, "forces": {}, "troop": {}, "troops": {}, "bomb": {},
	"军队": {}, "海军": {}, "空军": {}, "导弹": {}, "无人机": {},
	"打击": {}, "攻击": {}, "战争": {}, "冲突": {}, "战斗": {},
	"入侵": {}, "防御": {}, "武器": {}, "核": {}, "军事": {},
	"部队": {}, "士兵": {}, "炸弹": {}, "轰炸": {},
}

var politicsSet = map[string]struct{}{
	"government": {}, "minister": {}, "president": {}, "parliament": {},
	"election": {}, "vote": {}, "policy": {}, "sanction": {}, "diplomacy": {},
	"summit": {}, "treaty": {}, "agreement": {}, "negotiation": {},
	"政府": {}, "部长": {}, "总统": {}, "议会": {}, "选举": {},
	"投票": {}, "政策": {}, "制裁": {}, "外交": {}, "峰会": {},
	"条约": {}, "协议": {}, "谈判": {},
}

var economySet = map[string]struct{}{
	"oil": {}, "gas": {}, "energy": {}, "trade": {}, "economy": {},
	"market": {}, "price": {}, "investment": {}, "finance": {}, "bank": {},
	"石油": {}, "天然气": {}, "能源": {}, "贸易": {}, "经济": {},
	"市场": {}, "价格": {}, "投资": {}, "金融": {}, "银行": {},
}

var disasterSet = map[string]struct{}{
	"earthquake": {}, "flood": {}, "fire": {}, "explosion": {}, "crash": {},
	"disaster": {}, "evacuation": {}, "rescue": {}, "casualty": {},
	"地震": {}, "洪水": {}, "火灾": {}, "爆炸": {}, "坠毁": {},
	"灾难": {}, "疏散": {}, "救援": {}, "伤亡": {},
}

func topWords(freq map[string]wordFreq, n int) []WordCloudWord {
	type pair struct {
		text   string
		weight int
		group  WordCloudGroup
	}
	pairs := make([]pair, 0, len(freq))
	for text, wf := range freq {
		pairs = append(pairs, pair{text, wf.weight, wf.group})
	}
	sort.Slice(pairs, func(i, j int) bool {
		if pairs[i].weight != pairs[j].weight {
			return pairs[i].weight > pairs[j].weight
		}
		return pairs[i].text < pairs[j].text
	})
	if len(pairs) > n {
		pairs = pairs[:n]
	}
	out := make([]WordCloudWord, len(pairs))
	for i, p := range pairs {
		out[i] = WordCloudWord{Text: p.text, Weight: p.weight, Group: p.group}
	}
	return out
}
