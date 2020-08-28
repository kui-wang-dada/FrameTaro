import Taro from "@tarojs/taro";
import React from "react";
import { AtIcon, AtToast, AtActivityIndicator } from "taro-ui";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

class Main extends React.Component {
  state = {
    height: "",
  };
  componentDidMount = async () => {};
  _navback() {
    Taro.navigateBack();
  }
  _backhome() {
    Taro.$share = false;
    Taro.switchTab({
      url: "/pages/home/index",
    });
  }
  render() {
    let share = Taro.$share;
    let height = Taro.$navBarMarginTop;
    console.log("Taro", Taro);
    let { showLeft, title } = this.props.navbarData;
    let { loading } = this.props;
    return (
      <View class="nav-wrap" style={{ height: height * 2 + 20 + "px" }}>
        <View class="nav-title" style={{ lineHeight: height * 2 + 44 + "px" }}>
          <View class="nav-title-wrap">
            {loading ? <AtActivityIndicator color="#999" className="nav-loading"></AtActivityIndicator> : null}
            {title}
          </View>
        </View>
        {showLeft ? (
          <View className="nav-left">
            <View class="nav-capsule" style={{ height: height * 2 + 44 + "px" }}>
              {!share ? (
                <View onClick={() => this._navback()}>
                  <AtIcon prefixClass="iconfont" value="back" size="14" color={"#222"} className="iconfont icon-back"></AtIcon>
                </View>
              ) : null}
              {!share ? <View class="navbar-v-line"></View> : null}

              <View onClick={() => this._backhome()}>
                <AtIcon prefixClass="iconfont" value="menu-home" size="18" color={"#222"} className="iconfont icon-menu-home"></AtIcon>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}
export default Main;
