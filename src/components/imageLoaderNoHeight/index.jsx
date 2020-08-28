import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image, Block } from "@tarojs/components";
import { checkImg } from "../../utils";
import "./index.scss";

class Main extends React.Component {
  state = {
    imgHeight: 3000,
  };
  componentDidMount = async () => {};
  // 监听原图加载完成
  toggleOriginLoaded(e) {
    console.log(e, "width,height");
    this.setState({
      loaded: true,
      imgHeight: e.detail.height,
    });
    this.props.onLoad && this.props.onLoad(e.detail.height);
  }
  // 监听缩略图加载完成
  toggleThumbLoaded() {
    this.setState({
      thumbLoaded: true,
    });
  }
  clickImg = () => {
    this.props.onClick && this.props.onClick();
  };
  render() {
    let { loaded, thumbLoaded, imgHeight } = this.state;
    let { item, style } = this.props;
    // 根据传入的宽高设置缩略图和原图的宽高

    return (
      <Block>
        <Image
          className="image--not-loaded"
          style={Object.assign({ display: loaded ? "none" : "auto", height: imgHeight + "rpx" })}
          lazyLoad
          mode="widthFix"
          onLoad={this.toggleThumbLoaded.bind(this)}
          src={checkImg(item, "180")}
        />
        {thumbLoaded && (
          <Image
            style={Object.assign({ display: loaded ? "auto" : "none", height: imgHeight + "rpx" })}
            lazyLoad
            className="image--is-loaded"
            mode="widthFix"
            src={checkImg(item, "720")}
            onClick={this.clickImg.bind(this)}
            onLoad={this.toggleOriginLoaded.bind(this)}
          />
        )}
      </Block>
    );
  }
}
export default Main;
