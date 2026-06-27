import { defineConfig } from "vitepress";
import utils from "./utils";

const { getSideBar } = utils;

export default defineConfig({
  base: "/",
  title: "HMCL-Helper",
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
  description: "HMCL-Helper documentation site",
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
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清除查询条件",
            backButtonTitle: "返回搜索",
            noResultsText: "无法找到相关结果",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "回车键",
              navigateText: "切换",
              navigateUpKeyAriaLabel: "上箭头",
              navigateDownKeyAriaLabel: "下箭头",
              closeText: "关闭",
              closeKeyAriaLabel: "Esc 键",
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