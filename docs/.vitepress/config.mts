import { defineConfig } from "vitepress";
import utils from "./utils";

const { getSideBar } = utils;

export default defineConfig({
  base: "/",
  title: "炸鸭好吃！我要吃炸鸭！",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/1.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/viewerjs@1.11.1/dist/viewer.min.css",
      },
    ],
  ],
  description: "Welcome to Charlie's blog!",
  cleanUrls: true,
  lang: "zh-CN",
  themeConfig: {
    logo: "/1.png",
    outline: {
      level: "deep",
      label: "目录",
    },
    nav: [{ text: "主页", link: "/guide/" }],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    sidebar: {
      "/guide/": getSideBar("guide"),
      "/helper/": getSideBar("helper"),
      "/internet/": getSideBar("internet"),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Hylfrd/hmcl-helper" },
    ],
  },
  lastUpdated: true,
});