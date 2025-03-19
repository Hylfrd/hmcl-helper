export default {
  getSideBar(path) {
    const wholeList = [
      {
        text: "HMCL崩溃指南讲解", 
        collapsed: false, 
        items: [
          { text: "如何安装HMCL", link: "/hmcl-helper/guide/hmcl" }, 
          { text: "如何安装Java", link: "/hmcl-helper/guide/java" },
          { text: "如何打开自动安装界面", link: "/hmcl-helper/guide/install" },
          { text: "如何打开配置文件夹", link: "/hmcl-helper/guide/config" },
          { text: "如何找到latest.log", link: "/hmcl-helper/guide/latest" },
        ],
      },
    ];

    return wholeList;
  },
};