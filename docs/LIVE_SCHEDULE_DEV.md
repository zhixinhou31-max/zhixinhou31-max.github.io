# Live schedule module — developer handoff

## Route & entry

| Item | Value |
|------|--------|
| Hash route | `#/live/schedule` |
| Route id | `live_schedule` (`ROUTES` in `app.js`) |
| Render | `renderLiveSchedule()` |
| Events | `bindLiveScheduleEvents()` |

## User-facing copy & i18n

- All new UI strings for this module use the **`ls.*`** key namespace in the shared `i18n` object (`en` / `zh`).
- Runtime: `t('ls.some.key')`. Placeholders: `{0}`, `{1}` — use `lsT(key, a0, a1)` in the Live Schedule block.
- Switching language re-runs `render()`; list/tab/modal strings update without extra wiring.

### Scope covered by `ls.*`

- Page title + intro (`ls.title`, `ls.intro`)
- Top tabs: Host availability / Hour targets / Schedules (`ls.tab.*`)
- Session status tabs (`ls.sess.*`)
- Batches table: columns, actions, empty state, search placeholder
- Targets tab: toolbar, table headers, hints
- Host matrix: week nav, timezone hint, toolbar, empty state, cell tooltips
- Drawer: close `aria-label`, Session / Relay / Availability / Planned tab labels
- Modals: titles (`ls.modal.detail`, `ls.modal.edit`, save/update), section titles (`ls.section.*`), live-ended hint (`ls.live_ended.hint`), segment field labels (`ls.seg.*`)

### Partially hardcoded (follow-up)

- Edit / live-ended **form field labels** inside `lsRenderSessionEditDetailHtml` and `lsRenderSessionLiveEndedDetailModalHtml` (e.g. 主题、直播时间) — still Chinese in markup; extend `ls.field.*` if product needs full EN parity on every label.
- Host drawer **day table** (作废/编辑/状态) and some toasts remain Chinese.

## Data & persistence (MVP)

| Key | Purpose |
|-----|---------|
| `wahool_ls_batches` | Batches + sessions + segments |
| `wahool_ls_host_avail` | Host availability segments |
| `wahool_ls_targets` | Merchant hour targets |
| `wahool_ls_timezone_display` | Display timezone for matrix |

## Domain rules (product)

- **TikTok `session_id`**: numeric string in production; URL shape `https://shop.tiktok.com/streamer/live/event/dashboard?session_id=…`
- **GMV currency**: `session.gmvCurrency` / `segment.gmvCurrency` (ISO 4217); UI uses `lsFormatGmvDisplay` + `Intl.NumberFormat`
- **Live**: do not add host segments (UI hides “Add host”)
- **Manual workflows**: scheduling/conflict handling is human-driven in MVP

## UI structure (for design QA)

- Root: `#lsRoot` with class `ls-live-schedule`
- Intro block: `ls-live-schedule-intro` — title + one-line description (`ls.intro`)
- Per-tab content: `card ha-settle-card ls-live-schedule-card` where applicable
- Live/ended detail modal: `ls-session-edit--live-ended-modal`, segment cards `ls-sess-seg-card`

## Backend integration (when wiring APIs)

1. Replace `localStorage` loaders with REST/GraphQL; keep the same **session / segment / batch** shape to minimize UI churn.
2. Map API errors to toasts; disable primary actions while loading (pattern in UI skill).
3. Continue returning **`gmvCurrency`** with session or segment for display-only formatting.
