#Opsique

与「直播服务」并列的 Affiliate 业务线前端，首版包含：找达人、达人批量触达、达人管理；同时包含 Tenant Center 里的结算板块（Settlement）。
其中 Live 板块 & Affiliate 板块共用同一套结算系统（入口在同一处）。

## 结构

- **index.html**：整体布局、**Role 切换**（直播服务 | Affiliate）、左侧导航。切换为 Affiliate 后一级菜单整体替换为：Find Creators、Outreach、Creator CRM、Analytics（Soon）。
- **styles/app.css**：共享品牌样式、布局与跨页面组件样式。
- **scripts/app.js**：Role 持久化（localStorage）、Hash 路由及主应用模块渲染与交互。
- **pages/live/**：独立 Live 页面原型，例如 Live Settings、Auto-Setting Flash Sale。
- **assets/**：静态资源。
- **docs/**：开发交接与模块说明文档。
- **结算板块（Settlement）**：位于 Tenant Center 内的 Host & Affiliate 子菜单（Live / Affiliate 共用）。

## 本地运行

用浏览器直接打开 `index.html`，或使用本地静态服务：

```bash
npx serve .
# 或 python3 -m http.server 8080
```

默认按当前 Role 进入：直播服务为 Dashboard，Affiliate 为 Creator CRM。

独立页面原型当前位于：

- `pages/live/live-settings.html`
- `pages/live/auto-setting-flash-sale.html`

## Role 与路由

- **Role 切换**：侧栏顶部「直播服务」|「Affiliate」。选 Affiliate 后一级菜单变为：Find Creators、Outreach、Creator CRM、Analytics（后续版本）。当前 Role 会保存到 localStorage，刷新后保持。
- **直播服务**：`#/` 为 Dashboard；一级菜单为 Dashboard、Live Calendar、Live Console、Live Settings、Live Products、商家中心。
- **Affiliate**：

| 路径 | 模块 |
|------|------|
| `#/affiliate/creators` | Creator CRM（达人管理） |
| `#/affiliate/discover` | Find Creators（找达人） |
| `#/affiliate/outreach` | Outreach（达人批量触达） |
| `#/affiliate/analytics` | Analytics（占位，后续版本） |

- **Tenant Center（结算）**：

| 入口 | 路径 |
|------|------|
| `#/affiliate/analytics` | Tenant Center > HOST & AFFILIATE > Settlement |

说明：Live 与 Affiliate 角色都可进入同一入口的结算页面。

## 后续对接

- **找达人**：对接后端「AI 解析 + TikTok 抓取/检索」接口，替换当前模拟回复与卡片。
- **达人批量触达**：对接 Wahool 邮件系统（发信、打开/点击/回复回传），实现真实任务创建与统计。
- **达人管理**：对接 CRUD API，支持导入、标签/分组、触达回写、样品管理。
