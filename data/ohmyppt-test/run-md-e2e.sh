#!/usr/bin/env bash
# E2E: md/ content -> ohmyppt generate -> export zip + pptx
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
MD_FILE="${REPO_ROOT}/md/ai-relay-station-report.md"
OUT_DIR="${REPO_ROOT}/data/ohmyppt-test/output"
SERVICE_URL="${OHMYPPT_SERVICE_URL:-http://127.0.0.1:6130}"
DATA_DIR="${OHMYPPT_DATA_DIR:-${REPO_ROOT}/data/ohmyppt-test}"

mkdir -p "$OUT_DIR"

if [[ ! -f "$MD_FILE" ]]; then
  echo "missing md file: $MD_FILE" >&2
  exit 1
fi

# Load API keys from repo .env (do not override existing env)
if [[ -f "${REPO_ROOT}/.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "${REPO_ROOT}/.env"
  set +a
fi

health_code="$(curl -s -o /dev/null -w '%{http_code}' "${SERVICE_URL}/health" || true)"
if [[ "$health_code" != "200" ]]; then
  echo "ohmyppt service not reachable at ${SERVICE_URL} (got ${health_code})" >&2
  echo "Start it: cd services/ohmyppt && OHMYPPT_DATA_DIR=${DATA_DIR} npm run dev" >&2
  exit 1
fi

TOPIC="$(grep -m1 '^# ' "$MD_FILE" | sed 's/^# //')"
MD_CONTENT="$(cat "$MD_FILE")"

echo "==> Creating session: ${TOPIC}"
STYLE_ID="$(curl -sS "${SERVICE_URL}/v1/styles" | jq -r '.styles[] | select(.style_key=="swiss-grid") | .id' | head -1)"
if [[ -z "$STYLE_ID" ]]; then
  STYLE_ID="$(curl -sS "${SERVICE_URL}/v1/styles" | jq -r '.styles[0].id')"
fi
echo "Using style_id: ${STYLE_ID}"

CREATE_RESP="$(curl -sS -X POST "${SERVICE_URL}/v1/sessions" \
  -H 'Content-Type: application/json' \
  -d "$(jq -n \
    --arg topic "$TOPIC" \
    --arg style_id "$STYLE_ID" \
    '{topic: $topic, style_id: $style_id, page_count: 8, locale: "zh"}')")"

SESSION_ID="$(echo "$CREATE_RESP" | jq -r '.session.id // empty')"
if [[ -z "$SESSION_ID" ]]; then
  echo "failed to create session:" >&2
  echo "$CREATE_RESP" >&2
  exit 1
fi
echo "$CREATE_RESP" > "${OUT_DIR}/session-create.json"
echo "$SESSION_ID" > "${OUT_DIR}/session-id.txt"
echo "Session: $SESSION_ID"

echo "==> Generating slides (SSE, may take several minutes)..."
GEN_PAYLOAD="$(jq -n \
  --arg msg "请根据以下 Markdown 调研报告生成演示文稿，保留核心结论、风险与建议，图表优先用数据可视化：

${MD_CONTENT}" \
  '{user_message: $msg}')"

curl -sS -N -X POST "${SERVICE_URL}/v1/sessions/${SESSION_ID}/generate" \
  -H 'Content-Type: application/json' \
  -d "$GEN_PAYLOAD" \
  | tee "${OUT_DIR}/generate.log" \
  | while IFS= read -r line; do
      if [[ "$line" == data:* ]]; then
        payload="${line#data: }"
        [[ "$payload" == "[DONE]" ]] && echo "Generation finished."
        echo "$payload" | jq -r 'select(.type=="run_completed" or .type=="run_error") | .type' 2>/dev/null || true
      fi
    done

echo "==> Fetching session detail"
curl -sS "${SERVICE_URL}/v1/sessions/${SESSION_ID}" | jq '.' > "${OUT_DIR}/session-detail.json"
PAGE_COUNT="$(jq '.pages | length' "${OUT_DIR}/session-detail.json")"
echo "Pages generated: ${PAGE_COUNT}"

if [[ "$PAGE_COUNT" -lt 1 ]]; then
  echo "No pages generated; aborting export." >&2
  exit 1
fi

echo "==> Exporting ZIP"
ZIP_PATH="${OUT_DIR}/ai-relay-station-ohmyppt.zip"
curl -sS -X POST "${SERVICE_URL}/v1/sessions/${SESSION_ID}/export" \
  -H 'Content-Type: application/json' \
  -d '{"format":"zip"}' \
  -o "$ZIP_PATH"
echo "ZIP: $ZIP_PATH ($(du -h "$ZIP_PATH" | cut -f1))"

echo "==> Converting HTML slides to PPTX"
node "${REPO_ROOT}/data/ohmyppt-test/html-to-pptx.mjs" \
  --project-dir "${DATA_DIR}/projects/${SESSION_ID}" \
  --out "${OUT_DIR}/ai-relay-station-ohmyppt.pptx"

echo "Done."
echo "PPTX: ${OUT_DIR}/ai-relay-station-ohmyppt.pptx"
