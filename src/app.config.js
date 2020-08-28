export default {
  pages: ["pages/home/index", "pages/my/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#1AAD19",
    backgroundColor: "#fff",
    position: "bottom",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./static/img/tabbar/1-1.png",
        selectedIconPath: "./static/img/tabbar/home.png",
      },

      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./static/img/tabbar/4-1.png",
        selectedIconPath: "./static/img/tabbar/my.png",
      },
    ],
  },
  subPackages: [
    {
      root: "pageSub/",
      pages: ["detail/index"],
    },
  ],
};
