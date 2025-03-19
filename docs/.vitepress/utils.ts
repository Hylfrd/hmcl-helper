export default {
    getSideBar(path) {
      const wholeList = [
        {
          text: "HMCL崩溃指南讲解", // 侧边栏分组标题
          collapsed: false, // 默认展开
          items: [
            { text: "如何安装HMCL", link: "/hmcl-helper/hmcl" },
            { text: "如何安装Java", link: "/hmcl-helper/java" },
            { text: "如何打开自动安装界面", link: "/hmcl-helper/install" },
            { text: "如何打开配置文件夹", link: "/hmcl-helper/config" },
            { text: "如何打开模组文件夹", link: "/hmcl-helper/mod" },
            { text: "如何禁用模组", link: "/hmcl-helper/del-mod" },
            { text: "如何找到latest.log", link: "/hmcl-helper/latest" },
          ],
        },
      ];
  
      // 如果未传入 path，返回完整侧边栏
      if (!path) {
        return wholeList;
      }
  
      // 如果传入 path，返回匹配的侧边栏（默认返回完整侧边栏）
      return wholeList;
    },
  };