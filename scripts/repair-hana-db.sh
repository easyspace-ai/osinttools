#!/bin/bash
# Repair hana.db: drop corrupted xstream_items + legacy river_* tables.
#
# Strategy:
#   - Default (--rebuild): copy all healthy app tables into a fresh DB, recreate
#     empty xstream_items, swap files. Works even when in-place DROP fails.
#   - Optional (--in-place): DELETE/DROP on live file (only if corruption is mild).
#
# Usage (production):
#   systemctl stop osinttools          # stop app first
#
#   PROJECT_DIR=/data/osinttools bash scripts/repair-hana-db.sh --dry-run
#   PROJECT_DIR=/data/osinttools bash scripts/repair-hana-db.sh
#   systemctl start osinttools
#
#   # full xstream re-sync after repair:
#   #   XSTREAM_INIT_ENABLED=true  (one-time init on startup)
#
# Env:
#   PROJECT_DIR    default /data/osinttools
#   DB_PATH        default ${PROJECT_DIR}/hana.db
#   BACKUP_DIR     default /data/backups
#   SKIP_VACUUM=1  skip VACUUM on rebuilt file

set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-/data/osinttools}"
DB_PATH="${DB_PATH:-${PROJECT_DIR}/hana.db}"
BACKUP_DIR="${BACKUP_DIR:-/data/backups}"
LOG_DIR="${PROJECT_DIR}/logs"
KEEP_DAYS="${KEEP_DAYS:-7}"
SKIP_VACUUM="${SKIP_VACUUM:-0}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
XSTREAM_MIGRATION="${REPO_ROOT}/backend/internal/infrastructure/persistence/migrations/010_xstream_items.up.sql"
PUSH_STATE_MIGRATION="${REPO_ROOT}/backend/internal/infrastructure/persistence/migrations/011_dashboard_push_state.up.sql"

DRY_RUN=0
ASSUME_YES=0
IN_PLACE=0
for arg in "$@"; do
    case "$arg" in
        --dry-run)   DRY_RUN=1 ;;
        -y|--yes)    ASSUME_YES=1 ;;
        --in-place)  IN_PLACE=1 ;;
        -h|--help)
            sed -n '2,32p' "$0"
            exit 0
            ;;
        *)
            echo "ERROR: unknown argument: $arg (try --help)"
            exit 1
            ;;
    esac
done

DATE=$(date +%Y%m%d-%H%M%S)
BACKUP_FILE="${BACKUP_DIR}/hana-pre-repair-${DATE}.db"
NEW_DB="${DB_PATH}.rebuild-${DATE}"
CORRUPT_ARCHIVE="${DB_PATH}.corrupt-${DATE}"
LOG_FILE="${LOG_DIR}/repair-hana-${DATE}.log"

mkdir -p "$BACKUP_DIR" "$LOG_DIR"

log() {
    echo "[$(date '+%F %T')] $*" | tee -a "$LOG_FILE"
}

require_sqlite3() {
    command -v sqlite3 >/dev/null 2>&1 || { log "ERROR: sqlite3 not found"; exit 1; }
}

require_db() {
    [ -f "$DB_PATH" ] || { log "ERROR: database not found: $DB_PATH"; exit 1; }
}

require_migration() {
    for f in "$XSTREAM_MIGRATION" "$PUSH_STATE_MIGRATION"; do
        [ -f "$f" ] || {
            log "ERROR: migration not found: $f"
            log "Run from deployed repo (needs backend/internal/infrastructure/persistence/migrations/)"
            exit 1
        }
    done
}

table_exists() {
    local db="$1" table="$2"
    sqlite3 "$db" "SELECT 1 FROM sqlite_master WHERE type='table' AND name='$table' LIMIT 1;" | grep -q 1
}

table_count() {
    sqlite3 "$1" "SELECT COUNT(*) FROM \"$2\";" 2>/dev/null || echo "ERR"
}

integrity_line() {
    sqlite3 "$1" "PRAGMA integrity_check;" 2>&1 | head -1 || true
}

print_stats() {
    local db="$1" label="$2"
    log "${label}: ${db} ($(du -h "$db" | awk '{print $1}'))"
    log "  integrity: $(integrity_line "$db")"
    for t in xstream_items dashboard_push_state users projects sessions resources; do
        if table_exists "$db" "$t"; then
            log "  $t = $(table_count "$db" "$t")"
        else
            log "  $t = (missing)"
        fi
    done
    for t in river_job river_leader; do
        if table_exists "$db" "$t"; then
            log "  $t = $(table_count "$db" "$t") [legacy]"
        fi
    done
}

confirm_apply() {
    [ "$ASSUME_YES" -eq 1 ] && return 0
    echo
    echo "Database: $DB_PATH"
    if [ "$IN_PLACE" -eq 1 ]; then
        echo "Mode: in-place (DELETE xstream_items, DROP river_*)"
    else
        echo "Mode: rebuild (copy healthy tables -> new file, swap)"
        echo "  - xstream_items: empty table"
        echo "  - dashboard_push_state: not copied (reset)"
        echo "  - river_*: not copied (removed)"
    fi
    echo
    read -r -p "Type 'yes' to continue: " answer
    [ "$answer" = "yes" ] || { log "Aborted."; exit 1; }
}

backup_db() {
    log "checkpoint WAL on source..."
    sqlite3 "$DB_PATH" "PRAGMA wal_checkpoint(TRUNCATE);" 2>/dev/null || true

    log "backup -> $BACKUP_FILE"
    sqlite3 "$DB_PATH" ".backup '$BACKUP_FILE'"
    log "backup size: $(du -h "$BACKUP_FILE" | awk '{print $1}')"

    if sqlite3 "$BACKUP_FILE" "PRAGMA integrity_check;" 2>/dev/null | grep -q "^ok$"; then
        log "backup integrity_check: ok"
    else
        log "WARN: backup integrity_check not ok (kept for salvage)"
    fi

    find "$BACKUP_DIR" -name "hana-pre-repair-*.db" -type f -mtime +"${KEEP_DAYS}" -print -delete | tee -a "$LOG_FILE" || true
}

tables_to_copy() {
    sqlite3 "$DB_PATH" "
        SELECT name FROM sqlite_master
        WHERE type='table'
          AND name NOT LIKE 'sqlite_%'
          AND name NOT LIKE 'river_%'
          AND name NOT IN ('xstream_items', 'dashboard_push_state')
        ORDER BY name;
    "
}

rebuild_db() {
    log "rebuilding -> $NEW_DB"
    rm -f "$NEW_DB"
    sqlite3 "$NEW_DB" < "$XSTREAM_MIGRATION"
    sqlite3 "$NEW_DB" < "$PUSH_STATE_MIGRATION"

    local t
    while IFS= read -r t; do
        [ -z "$t" ] && continue
        log "  copy table: $t"
        sqlite3 "$DB_PATH" ".schema '$t'" | sqlite3 "$NEW_DB"
        sqlite3 "$NEW_DB" "ATTACH '$DB_PATH' AS src; INSERT INTO main.\"$t\" SELECT * FROM src.\"$t\"; DETACH src;"
        log "    rows: $(table_count "$NEW_DB" "$t")"
    done < <(tables_to_copy)

    if [ "$SKIP_VACUUM" != "1" ]; then
        log "VACUUM rebuilt db..."
        sqlite3 "$NEW_DB" "VACUUM;"
    fi
}

swap_db() {
    log "swap: $DB_PATH"
    mv "$DB_PATH" "$CORRUPT_ARCHIVE"
    mv "$NEW_DB" "$DB_PATH"
    rm -f "${DB_PATH}-wal" "${DB_PATH}-shm" 2>/dev/null || true
    log "archived corrupt file: $CORRUPT_ARCHIVE"
}

repair_in_place() {
    log "in-place repair..."
    sqlite3 "$DB_PATH" <<'SQL'
PRAGMA busy_timeout = 10000;
BEGIN IMMEDIATE;
DELETE FROM xstream_items;
DELETE FROM dashboard_push_state;
DROP TABLE IF EXISTS river_leader;
DROP TABLE IF EXISTS river_job;
DROP TABLE IF EXISTS river_client;
DROP TABLE IF EXISTS river_client_queue;
DROP TABLE IF EXISTS river_queue;
DROP TABLE IF EXISTS river_migration;
COMMIT;
SQL
    if [ "$SKIP_VACUUM" != "1" ]; then
        sqlite3 "$DB_PATH" "VACUUM;"
    fi
}

main() {
    require_sqlite3
    require_db
    require_migration

    log "=== hana.db repair (dry_run=$DRY_RUN in_place=$IN_PLACE) ==="
    log "BEFORE"
    print_stats "$DB_PATH" "source"
    backup_db

    if [ "$DRY_RUN" -eq 1 ]; then
        log "tables that would be copied:"
        tables_to_copy | tee -a "$LOG_FILE"
        log "DRY-RUN complete. log: $LOG_FILE"
        exit 0
    fi

    confirm_apply

    if [ "$IN_PLACE" -eq 1 ]; then
        if ! repair_in_place; then
            log "ERROR: in-place repair failed (corruption too severe). Retry without --in-place."
            exit 1
        fi
    else
        rebuild_db
        swap_db
    fi

    log "AFTER"
    print_stats "$DB_PATH" "result"

    if sqlite3 "$DB_PATH" "PRAGMA integrity_check;" 2>/dev/null | grep -q "^ok$"; then
        log "SUCCESS: integrity_check ok"
    else
        log "ERROR: integrity_check still failing"
        exit 2
    fi

    log "done. log: $LOG_FILE"
    log "start app; set XSTREAM_INIT_ENABLED=true for one-time full xstream backfill"
}

main "$@"
