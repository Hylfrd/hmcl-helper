export default {
  getSideBar(path) {
    const wholeList = [
      {
        text: "HMCL崩溃指南讲解", 
        collapsed: false, 
        items: [
          { text: "HMCL更新问题", link: "/guide/hmcl" },
          { text: "安装Java问题", link: "/guide/java" },
          { text: "自动安装界面问题", link: "/guide/install" },
          { text: "配置文件问题", link: "/guide/config" },
          { text: "latest.log问题", link: "/guide/latest" },
          { text: "显卡问题", link: "/guide/gpu" },
          { text: "虚拟机参数问题", link: "/guide/jvm" },
          { text: "环境变量问题", link: "/guide/variables" },
          { text: "打开'查看日志'问题", link: "/guide/log" },
        ],
      },
    ];

    return wholeList;
  },
};