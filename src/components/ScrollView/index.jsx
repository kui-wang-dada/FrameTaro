import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Image, ScrollView, Text } from "@tarojs/components";
import refreshIcon from "../../static/img/refresh.png";
import loadingIcon from "../../static/img/loading.png";
import doneIcon from "../../static/img/done.png";
const { screenHeight, screenWidth } = Taro.getSystemInfoSync();
const rpx2pxRate = 750 / screenWidth;
function px2rpx(px) {
  return px * rpx2pxRate;
}

import "./index.scss";
const refreshStatus = {
  INIT: 0,
  PULL_DOWN: 1,
  READY_REFRESH: 2,
  LOADING: 3,
  DONE: 4,
};

class RefreshContainer extends Component {
  lastTouchY = 0;
  isUpper = true;
  maxHeight = 50;
  validHeight = 30;

  state = {
    refreshHeight: 0,
    refreshing: false,
    loading: false,
    refreshStatu: refreshStatus.INIT,
  };
  static defaultProps = {
    scrollViewHeight: px2rpx(screenHeight - 120),
  };
  componentWillReceiveProps(newProps) {
    if (!newProps.refreshing) {
      this.setState(
        {
          refreshHeight: 0,
        },
        () => {}
      );
      const loadingAnimate = setTimeout(() => {
        this.setState({
          refreshStatu: refreshStatus.DONE,
        });
        clearTimeout(loadingAnimate);
      }, 200);
    }
  }
  handleTouchMove(e) {
    const curTouch = e.touches[0];
    const moveY = (curTouch.pageY - this.lastTouchY) * 0.3;
    if (!this.isUpper || moveY < 0 || moveY > 2 * this.maxHeight || this.state.refreshStatu === refreshStatus.LOADING) {
      return;
    }
    if (moveY < this.validHeight) {
      this.setState({
        refreshHeight: moveY,
        refreshStatu: refreshStatus.PULL_DOWN,
      });
    } else {
      this.setState({
        refreshHeight: moveY,
        refreshStatu: refreshStatus.READY_REFRESH,
      });
    }
  }
  handleScrollToLower() {
    if (this.props.hasMore && this.props.onLoadMore && this.state.refreshStatu !== refreshStatus.LOADING) {
      this.props.onLoadMore();
    }
  }
  handleTouchStart(e) {
    const curTouch = e.touches[0];
    this.lastTouchY = curTouch.pageY;
  }
  handleTouchEnd() {
    this.lastTouchY = 0;
    if (this.state.refreshStatu === refreshStatus.READY_REFRESH) {
      this.setState({
        refreshStatu: refreshStatus.LOADING,
        refreshHeight: this.maxHeight,
      });
      if (this.props.onRefresh) {
        this.props.onRefresh();
      }
    } else {
      this.setState({
        refreshHeight: 0,
      });
    }
  }
  handleScrollToUpeper() {
    this.isUpper = true;
  }
  handleScroll() {
    this.isUpper = false;
  }
  render() {
    const { refreshHeight, refreshStatu } = this.state;
    return (
      <ScrollView
        className="refresh-scroll-view"
        refresherEnabled
        refresherTriggered={refreshStatu === refreshStatus.LOADING}
        style={{ height: this.props.scrollViewHeight + "rpx" }}
        onScrollToUpper={this.handleScrollToUpeper.bind(this)}
        onScroll={this.handleScroll.bind(this)}
        onScrollToLower={this.handleScrollToLower.bind(this)}
        scrollY={true}
      >
        {/* <View
          className={`refresh-icon-view ${refreshStatu === refreshStatus.LOADING ? "loading" : ""}`}
          style={{ height: refreshHeight + "px" }}
        >
          <Image
            className={`refresh-icon ${refreshStatu === refreshStatus.LOADING ? "loading" : ""}`}
            src={refreshIcon}
            style={{ transform: `rotate(${(refreshHeight / this.maxHeight) * 360}deg)` }}
          ></Image>
          <Text className="statusLabel">刷新</Text>
        </View> */}
        <View
          className="refresh-body-view"
          onTouchMove={this.handleTouchMove.bind(this)}
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
        >
          {this.props.children}
        </View>
        <View className="load-more-view">
          {this.props.hasMore ? (
            <View className="load-more-wrap">
              <Image className="load-more-icon loading" src={loadingIcon}></Image>
              <Text className="statusLabel">加载更多</Text>
            </View>
          ) : (
            <View className="load-more-wrap">
              <Image className="load-more-icon" src={doneIcon}></Image>
              <Text className="statusLabel">没有更多了</Text>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default RefreshContainer;
