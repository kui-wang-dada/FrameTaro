import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image, Block } from "@tarojs/components";
import { checkImg } from "../../utils";
import "./index.scss";

class Main extends React.Component {
  state = {};
  componentDidMount = async () => {};
  // 监听原图加载完成
  toggleOriginLoaded(e) {
    console.log(e, "width,height");
    this.setState({
      loaded: true,
    });
  }
  // 监听缩略图加载完成
  toggleThumbLoaded() {
    this.setState({
      thumbLoaded: true,
    });
  }

  render() {
    let { loaded, thumbLoaded } = this.state;
    let { item, style } = this.props;
    // 根据传入的宽高设置缩略图和原图的宽高

    return (
      <Block>
        <Image
          className="image--not-loaded"
          style={Object.assign({ display: loaded ? "none" : "auto" })}
          lazyLoad
          mode="aspectFill"
          onLoad={this.toggleThumbLoaded.bind(this)}
          src={checkImg(item, "180")}
        />
        {thumbLoaded && (
          <Image
            style={Object.assign({ display: loaded ? "auto" : "none" })}
            lazyLoad
            className="image--is-loaded"
            mode="aspectFill"
            src={checkImg(item, "720")}
            onLoad={this.toggleOriginLoaded.bind(this)}
          />
        )}
      </Block>
    );
  }
}
export default Main;
