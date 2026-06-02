# Own templates (Phase 3)

Commercial, repo-owned `.pptx` templates for **Mode T**. Unlike Gorden Phase 1 assets, these may be used in client deliverables once `template.pptx` and licensing are in place.

---

## Registered slugs

| Slug | Path | Status | Mode T |
|------|------|--------|--------|
| `osint-report` | [../templates/osint-report/](../templates/osint-report/) | scaffold — awaiting `template.pptx` | when ready |

Gorden built-ins remain under `GordenPPTSkill/templates/` (Phase 1, personal use only). See [template-workflow.md](template-workflow.md).

---

## Adding a new own template

1. Create `data/levenppt/templates/<slug>/`
2. Add `template.pptx` (designer deliverable)
3. Run Gorden capacity tool to produce `detail.json`:

```bash
cd data/levenppt/GordenPPTSkill
python3 scripts/compute_capacity.py \
  ../../templates/<slug>/detail.stub.json \
  ../../templates/<slug>/template.pptx \
  -o ../../templates/<slug>/detail.json
```

4. Write `intro.md` (scene, density, palette) and optional `preview.png`
5. Register slug in this file
6. If report-specific, add intent → page mapping in [report-layout-map.md](report-layout-map.md)

---

## osint-report

Investigation / OSINT-style research decks: dense findings, legal/compliance blocks, stat callouts, three-column risk pillars.

- **Primary color**: deep navy + alert accent (align with `midnight-exec` or custom once designed)
- **Target density**: 10–15 slides from long Markdown reports
- **Until `template.pptx` exists**: use Gorden `report-massive-reports` (Phase 1) or Mode P layout presets

See [../templates/osint-report/README.md](../templates/osint-report/README.md).
