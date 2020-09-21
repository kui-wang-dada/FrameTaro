import React, { Component } from "react";
import { Provider } from "react-redux";

import configStore from "./store";

import "./app.scss";

const store = configStore();

class App extends Component {
  componentDidMount() {
    Taro.getSystemInfo({}).then((res) => {
      Taro.$navBarMarginTop = res.statusBarHeight || 0;
    });
  }
  onLaunch(options) {
    console.log(options, "options");
    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      Taro.$share = true;
    } else {
      Taro.$share = false;
    }
  }
  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
