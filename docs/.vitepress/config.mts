import { defineConfig } from "vitepress";
import utils from "./utils";
const { getSideBar } = utils;

export default defineConfig({
  base: "/",
  title: "HMCL Helper",
  head: [
    // 关键修改：使用完整绝对路径
    ["link", { 
      rel: "icon",
      type: "image/svg+xml",
      href: "https://hmcl-helper.cn/1.png" // 使用完整域名路径
    }],
    ["link", { 
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/viewerjs@1.11.1/dist/viewer.min.css" 
    }],
    // 新增备用图标声明
    ["link", {
      rel: "shortcut icon",
      href: "https://hmcl-helper.cn/favicon.ico",
      type: "image/x-icon"
    }]
  ],
  description: "Welcome to Charlie's blog!",
  cleanUrls: true,
  themeConfig: {
    // 关键修改：使用完整路径
    logo: "https://hmcl-helper.cn/1.png",
    outline: "deep",
    nav: [{ 
      text: "主页", 
      link: "/guide/",
      activeMatch: "/guide/" 
    }],
    search: {
      provider: 'local',
      options: { /* 保持原有配置 */ }
    },
    sidebar: {
      "/guide/": getSideBar("guide"),
      "/helper/": getSideBar("helper"),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Hylfrd/hmcl-helper" }
    ],
    footer: {
      message: "HMCL Helper By Hylfrd,与HMCL官方无关",
    },
  },
  lastUpdated: true
});