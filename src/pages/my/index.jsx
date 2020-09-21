import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { NavBar } from "../../components";
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
class My extends React.Component {
  state = {};
  componentDidMount = async () => {};
  render() {
    let navbarData = { title: "个人中心", showLeft: false };
    let height = Taro.$navBarMarginTop;
    return (
      <View style={{ paddingTop: height * 2 + 20 + "px" }}>
        <NavBar navbarData={navbarData}></NavBar>
        <Text>123</Text>
      </View>
    );
  }
}
export default My;
