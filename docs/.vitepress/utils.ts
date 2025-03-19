export default {
  getSideBar(path) {
    const wholeList = [
      {
        text: "HMCL崩溃指南讲解", 
        collapsed: false, 
        items: [
          { text: "如何安装HMCL", link: "/guide/hmcl" }, // 移除 /hmcl-helper 前缀
          { text: "如何安装Java", link: "/guide/java" },
          { text: "如何打开自动安装界面", link: "/guide/install" },
          { text: "如何打开配置文件夹", link: "/guide/config" },
          { text: "如何找到latest.log", link: "/guide/latest" },
        ],
      },
    ];

    return wholeList;
  },
};