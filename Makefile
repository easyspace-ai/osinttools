# 产物目录：$(ROOT)/bin/server + $(ROOT)/bin/static/
# bin/static/ 在本地 make frontend 后提交 git；服务端 make all 只编译 Go。
ROOT := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
BIN := $(ROOT)/bin
BACKEND := $(ROOT)/backend
FRONTEND := $(ROOT)/frontend
SERVER_BIN := $(BIN)/server
STATIC_INDEX := $(BIN)/static/index.html

.PHONY: all frontend backend check-static clean clean-all

all: check-static backend

check-static:
	@test -f "$(STATIC_INDEX)" || (echo "error: $(STATIC_INDEX) 不存在，请在本地执行 make frontend 并提交 bin/static/" >&2; exit 1)

# 本地构建前端静态资源 → bin/static/（改前端后执行，再 git commit）
frontend:
	mkdir -p "$(BIN)"
	cd "$(FRONTEND)" && pnpm install && NODE_OPTIONS=--max-old-space-size=8192 pnpm run build

backend:
	mkdir -p "$(BIN)"
	cd "$(BACKEND)" &&  CGO_ENABLED=1 go build -trimpath -o "$(SERVER_BIN)" ./cmd/server

backend-liunx:
	mkdir -p "$(BIN)"
	docker run --rm --platform linux/amd64 \
		-v "$(BACKEND)":/src \
		-v "$(BIN)":/out \
		-w /src \
		golang:1.25-bookworm \
		bash -c "apt-get update -qq && apt-get install -y -qq gcc > /dev/null 2>&1 && CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -trimpath -o /out/server ./cmd/server"


clean:
	rm -f "$(SERVER_BIN)"

clean-all: clean
	rm -rf "$(BIN)/static"
