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
  description: "Welcome to Charlie's blog!", 
  cleanUrls: true, 
  themeConfig: {
    logo: "/1.png", 
    outline: "deep", 
    nav: [
      { text: "Home", link: "/hmcl-helper/" }, // 只保留 Home
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