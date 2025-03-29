import { defineConfig } from "vitepress";
import utils from "./utils";
const { getSideBar } = utils;

export default defineConfig({
  base: "/", // 使用自定义域名必须设置为根路径
  title: "HMCL Helper",
  head: [
    // 图标配置（必须指向 public/ 下的文件）
    ["link", { 
      rel: "icon", 
      type: "image/svg+xml", 
      href: "/1.png" // 指向 public/1.png
    }],
    // Viewer.js 样式（保持原配置）
    ["link", { 
      rel: "stylesheet", 
      href: "https://cdn.jsdelivr.net/npm/viewerjs@1.11.1/dist/viewer.min.css" 
    }],
    // 新增 CNAME 自动部署支持
    ["link", { rel: "canonical", href: "https://hmcl-helper.cn" }]
  ],
  description: "Welcome to Charlie's blog!",
  cleanUrls: true, // 启用干净 URL
  themeConfig: {
    logo: "/1.png", // 必须与 head 中的路径一致
    outline: "deep", // 深度大纲
    nav: [
      { 
        text: "主页", 
        link: "/guide/",
        activeMatch: "/guide/" // 确保路由匹配高亮
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { 
                buttonText: '搜索文档', 
                buttonAriaLabel: '搜索文档' 
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { 
                  selectText: '选择', 
                  navigateText: '切换' 
                }
              }
            }
          }
        }
      }
    },
    sidebar: {
      "/guide/": getSideBar("guide"),
      "/helper/": getSideBar("helper"),
    },
    socialLinks: [
      { 
        icon: "github", 
        link: "https://github.com/Hylfrd/hmcl-helper" 
      }
    ],
    footer: {
      message: "HMCL Helper By Hylfrd,与HMCL官方无关",
    },
  },
  lastUpdated: true // 显示最后更新时间
});