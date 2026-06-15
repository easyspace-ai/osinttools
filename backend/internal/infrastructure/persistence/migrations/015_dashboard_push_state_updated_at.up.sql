-- Fix dashboard_push_state.updated_at: 011 used TEXT, GORM time.Time scan fails on read.
CREATE TABLE IF NOT EXISTS dashboard_push_state_v2 (
    session_id TEXT PRIMARY KEY NOT NULL,
    last_sent_max_id INTEGER NOT NULL DEFAULT 0,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT OR IGNORE INTO dashboard_push_state_v2 (session_id, last_sent_max_id, updated_at)
SELECT
    session_id,
    last_sent_max_id,
    CASE
        WHEN updated_at IS NULL OR trim(updated_at) = '' THEN datetime('now')
        ELSE updated_at
    END
FROM dashboard_push_state;

DROP TABLE IF EXISTS dashboard_push_state;
ALTER TABLE dashboard_push_state_v2 RENAME TO dashboard_push_state;
