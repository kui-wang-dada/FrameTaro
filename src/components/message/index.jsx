import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import { checkStaticImg } from "../../utils";

import "./index.scss";

class Message extends React.Component {
  state = {};
  componentDidMount = async () => {};
  render() {
    let Stragety = {
      noData: {
        img: checkStaticImg("noData.png"),
        label: "暂无数据",
      },
    };
    let { type } = this.props;
    let data = Stragety[type];
    return (
      <View className="message-component">
        <Image src={data.img} className="img"></Image>
        <View className="label">{data.label}</View>
      </View>
    );
  }
}
export default Message;
