import Taro from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
class TopHeader extends React.Component {
  state = {};
  componentDidMount = async () => {};
  config = {
    navigationBarTitleText: "首页",
  };

  render() {
    let { hasRight, title, label, color, padding } = this.props;
    return (
      <View className={["topHeader", padding ? "pad" : null]} onClick={() => this.handleRight()}>
        <View className="titleWrap">
          <Text className="line" style={{ backgroundColor: color }}></Text>
          <Text className="title">{title}</Text>
          {label ? <View className="label">{label}</View> : null}
        </View>
        {hasRight ? (
          <View className="right" click="handleRight">
            <Text className="right-all">全部</Text>
            <AtIcon value="chevron-right" size="20" color="#666"></AtIcon>
          </View>
        ) : null}
      </View>
    );
  }
  handleRight() {
    this.props.handleRight && this.props.handleRight();
  }
}
export default TopHeader;
