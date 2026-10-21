# HMCL-Helper

HMCL-Helper 是一个用于记录和提供 HMCL 启动器相关帮助文档的项目。主要用于HMCL官方报错处理QQ群中的解答问题与指引用户。

此项目非HMCL官方项目，欢迎为本项目撰写文档。

构建使用 Node.js 24 最新补丁版和 `package.json` 固定的 pnpm：`pnpm install --frozen-lockfile`，然后 `pnpm run docs:build`。稳定版 VitePress 1.6.4 通过 `pnpm-workspace.yaml` 使用已修复安全漏洞的 Vite 6.4.5；升级时保留该覆盖并运行完整构建与 `pnpm audit --registry=https://registry.npmjs.org`。ViewerJS 样式与脚本从同一锁定版本打包。CI 会审计完整依赖树，部署后通过 `/version.txt` 核验提交版本。
