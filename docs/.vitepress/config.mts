import { defineConfig } from "vitepress";
import utils from "./utils";
const { getSideBar } = utils;

export default defineConfig({
  base: "/", // 改为根路径
  title: "HMCL Helper",
  head: [
    ["link", { 
      rel: "icon",
      type: "image/svg+xml",
      href: "/1.png" // 移除仓库名前缀
    }],
    ["link", { 
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/viewerjs@1.11.1/dist/viewer.min.css" 
    }],
    // 新增 CNAME 配置
    ["link", { rel: "canonical", href: "https://hmcl-helper.cn" }]
  ],
  description: "Welcome to Charlie's blog!",
  cleanUrls: true,
  themeConfig: {
    logo: "/1.png", // 移除仓库名前缀
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