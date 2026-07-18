export default {
  getSideBar(path) {
    const wholeList = [
      {
        text: "HMCL基础指导",
        collapsed: false,
        items: [
          { text: "如何找到自己心仪的模组并下载游玩", link: "/guide/playmod" },
        ],
      },

      {
        text: "HMCL崩溃指南", 
        collapsed: false, 
        items: [
          { text: "报错群群公告", link: "/guide/notice" },
          { text: "HMCL更新问题", link: "/guide/hmcl" },
          { text: "Java问题相关", link: "/guide/java" },
          { text: "更改游戏Java特定版本", link: "/guide/java1" },
          { text: "自动安装界面问题", link: "/guide/install" },
          { text: "配置文件问题", link: "/guide/config" },
          { text: "日志问题", link: "/guide/latest" },
          { text: "显卡问题", link: "/guide/gpu" },
          { text: "虚拟机参数问题", link: "/guide/jvm" },
          { text: "环境变量问题", link: "/guide/variables" },
          { text: "打开'查看日志'问题", link: "/guide/log" },
          { text: "创建档案问题", link: "/guide/profile" },
          { text: "启动器日志问题", link: "/guide/launcher" },
          { text: "虚拟内存问题", link: "/guide/memory" },
          { text: "option.txt问题", link: "/guide/option" },
          { text: "事件查看器问题", link: "/guide/event" },
          { text: "渲染问题", link: "/guide/render" },
          { text: "处理器问题", link: "/guide/cpu" },
          { text: "启动器环境问题", link: "/guide/environment" },
          { text: "基准测试问题", link: "/guide/cputest" },
          { text: "英伟达独显直连问题", link: "/guide/gxn" },
          { text: "导出游戏运行栈不兼容", link: "/guide/log1" },
          { text: "软渲染器问题", link: "/guide/render1" },
          { text: "磁盘管理问题", link: "/guide/disk" },

        ],
      },

    ];

    return wholeList;
  },
};
