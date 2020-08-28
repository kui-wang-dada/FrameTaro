/** @format */
import { ApiConfig } from "../utils/config";

export default {
  userInfo: {
    name: "userInfo",
    method: "GET",
    desc: "用户信息",
    path: ApiConfig.baseUrl + "/apis/method/frappe.apis.apps.my_info",
  },
  login: {
    name: "login",
    method: "POST",
    desc: "登录",
    path: ApiConfig.baseUrl + "/apis/method/frappe.apis.apps.wxlogin",
  },
  collectLike: {
    name: "collectLike",
    method: "GET",
    desc: "收藏点赞",
    path: ApiConfig.baseUrl + "/apis/method/soa.ncov.api.myfav",
  },
};
