import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

class Main extends React.Component {
  state = {};
  componentDidMount = async () => {};
  render() {
    return (
      <View className="foot-bottom">
        <View className="foot-text">7/24 真人客服</View>
        <View className="foot-text">美国拨打：+1 (412) 756-3137</View>
        <View className="foot-text">中国拨打：+86 (010) 5387-5758</View>
        <View className="foot-text">美国：匹兹堡 | 洛杉矶 | 奥兰治 | 旧金山 | 纽约</View>
        <View className="foot-text">中国：北京 | 武汉 | 广州</View>
        <View className="foot-text">北京市西城区 西直门外大街18号 金贸大厦A座 1901 邮编100044</View>
      </View>
    );
  }
}
export default Main;
