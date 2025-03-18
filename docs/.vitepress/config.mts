import { defineConfig } from "vitepress";
import utils from "./utils";
const { getSideBar } = utils;

export default defineConfig({
  base: "/guide/", 
  title: "HMCL Helper", 
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/1.png",
      },
    ],
  ],
  description: "Welcome to Charlie's blog!", // 浏览器检索关键字
  cleanUrls: true, // 路由地址隐藏.html
  themeConfig: {
    logo: "/1.png", // 站点标题前的icon
    outline: "deep", 
    nav: [
      { text: "Home", link: "/" },
      { text: "hmcl", link: "/guide/hmcl", activeMatch: "/guide/" },
      { text: "java", link: "/guide/java", activeMatch: "/guide/" },
      { text: "config", link: "/guide/config", activeMatch: "/guide/" },
      { text: "mod", link: "/guide/mod", activeMatch: "/guide/" },
      { text: "del-mod", link: "/guide/del-mod", activeMatch: "/guide/" },
      { text: "latest", link: "/guide/latest", activeMatch: "/guide/" },
    ],
    search: {
      provider: "local",
    },

    sidebar: {
      "/guide/": getSideBar("guide"),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Hylfrd/hmcl-helper" },
    ],
    footer: {
      message: "HMCL Helper By Hylfrd,与HMCL官方无关",
 
    },
  },
});

