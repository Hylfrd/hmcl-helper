import { defineConfig } from "vitepress";
import utils from "./utils";
const { getSideBar } = utils;

export default defineConfig({
  base: "/hmcl-helper/", 
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
      { text: "Home", link: "/hmcl-helper/" },
      { text: "hmcl", link: "/hmcl-helper/hmcl", activeMatch: "/hmcl-helper/" },
      { text: "java", link: "/hmcl-helper/java", activeMatch: "/hmcl-helper/" },
      { text: "config", link: "/hmcl-helper/config", activeMatch: "/hmcl-helper/" },
      { text: "mod", link: "/hmcl-helper/mod", activeMatch: "/hmcl-helper/" },
      { text: "del-mod", link: "/hmcl-helper/del-mod", activeMatch: "/hmcl-helper/" },
      { text: "latest", link: "/hmcl-helper/latest", activeMatch: "/hmcl-helper/" },
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

