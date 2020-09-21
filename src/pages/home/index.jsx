import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

import { connect } from "react-redux";
import { getUserInfo } from "../../store/actions";

const mapStateToProps = (state) => {
  return {
    userInfo: state.my.userInfo,
  };
};

const mapDispatchToProps = {
  getUserInfo,
};

@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {
  state = {};
  componentDidMount = async () => {};
  render() {
    return (
      <View className="wrap">
        <Text>123</Text>
      </View>
    );
  }
}
export default Home;
