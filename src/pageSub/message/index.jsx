import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { MessageItem, NavBar, ScrollView, Message } from "../../components";
import "./index.scss";
import { checkStaticImg } from "../../utils";
import { connect } from "react-redux";
import { getUserInfo, getHomeMessage } from "../../store/actions";

const mapStateToProps = (state) => {
  return {
    userInfo: state.my.userInfo,
    homeMessage: state.home.homeMessage,
  };
};

const mapDispatchToProps = {
  getUserInfo,
  getHomeMessage,
};

@connect(mapStateToProps, mapDispatchToProps)
class MessageList extends React.Component {
  state = {
    refreshing: false,
    hasMore: true,
    loading: false,
    messageList: [],
  };
  componentDidMount = async () => {
    this.params = {
      limit_start: 0,
      limit_page_length: 10,
    };
    await this.getData();
  };
  onShareAppMessage() {
    return {
      title: "厚仁留学沟通记录",
      path: "/pageSub/message/index",
    };
  }
  onShareTimeline() {
    return {
      title: "厚仁留学沟通记录",
    };
  }

  async onPullDownRefresh() {
    this.params.limit_start = 0;

    await this.getData();
  }
  onReachBottom() {
    console.log(123);
    if (!this.state.hasMore) {
      return;
    }

    this.params.limit_start += this.params.limit_page_length;
    this.getData();
  }
  async getData() {
    let messageList = [];
    let hasMore = true;
    let res = await this.props.getHomeMessage(this.params);

    if (!res || !res.length) {
      hasMore = false;
      return;
    }
    if (res.length < this.params.limit_page_length) {
      hasMore = false;
    } else {
      hasMore = true;
    }

    if (this.params.limit_start === 0) {
      messageList = res;
    } else {
      messageList = this.state.messageList.concat(res);
    }
    this.setState({
      messageList,
      loading: false,
      refreshing: false,
      hasMore,
    });
  }
  render() {
    let navbarData = { title: "沟通记录", showLeft: true };
    let height = Taro.$navBarMarginTop;
    let { messageList } = this.state;
    return (
      <View style={{ paddingTop: height * 2 + 20 + "px" }}>
        <NavBar navbarData={navbarData}></NavBar>
        {messageList.length ? (
          <ScrollView
            refreshing={this.state.refreshing}
            hasMore={this.state.hasMore}
            onLoadMore={() => this.onReachBottom()}
            onRefresh={() => this.onPullDownRefresh()}
            className="bk-f1"
          >
            <View className="message-wrap">
              {messageList.map((item, index) => {
                return (
                  <View className="message-item" key={index}>
                    <MessageItem item={item}></MessageItem>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        ) : (
          <Message type="noData"></Message>
        )}
      </View>
    );
  }
}
export default MessageList;
