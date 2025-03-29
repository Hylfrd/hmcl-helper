import { defineConfig } from "vitepress";
import utils from "./utils";
const { getSideBar } = utils;

export default defineConfig({
  base: "/hmcl-helper/", // 必须与仓库名称一致
  title: "HMCL Helper",
  head: [
    ["link", { 
      rel: "icon",
      type: "image/svg+xml",
      href: "/hmcl-helper/1.png" // 带仓库前缀的路径
    }],
    ["link", { 
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/viewerjs@1.11.1/dist/viewer.min.css" 
    }]
  ],
  description: "Welcome to Charlie's blog!",
  cleanUrls: true,
  themeConfig: {
    logo: "/hmcl-helper/1.png", // 带仓库前缀的路径
    outline: "deep",
    nav: [{ text: "主页", link: "/guide/" }],
    search: {
      provider: 'local',
      options: { /* 原有配置 */ }
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