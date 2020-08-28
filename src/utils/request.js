import Taro from "@tarojs/taro";
import { uuid } from "./common";
export function getData(data, urlData) {
  let deviceId;
  try {
    var value = Taro.getStorageSync("deviceId");
    if (value) {
      deviceId = value;
      console.log(deviceId, "deviceId1");
      // Do something with return value
    } else {
      deviceId = uuid();
      Taro.setStorageSync("deviceId", deviceId);
    }
  } catch (e) {
    // Do something when catch error
  }

  console.log(deviceId, "deviceId2");
  let defaultHeader = {
    "X-APIS-Sid": deviceId,
    "X-APIS-Application": "mp",
    "X-APIS-Version": "v1",
    "X-MP-Platform": "WeChat",
    "X-MP-Appname": "wrfw",
  };

  Taro.showLoading({ title: "加载中" });
  let header = urlData.header ? urlData.header : { "content-Type": "application/json" };

  header = urlData.method === "POST" ? header : { "content-Type": "application/x-www-form-urlencoded" };

  header = { ...header, ...defaultHeader };

  return new Promise((resolve, reject) => {
    Taro.request({ url: urlData.path, method: urlData.method, header: header, data: data })
      .then((result) => {
        Taro.hideLoading();
        resolve(result.data);
      })
      .catch((e) => reject(e));
  });
}
