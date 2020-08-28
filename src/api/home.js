/** @format */
import { ApiConfig } from "../utils/config";

export default {
  banner: {
    name: "banner",
    method: "GET",
    desc: "轮播",
    path: ApiConfig.baseUrl + "/apis/method/frappe.apis.apps.products_ad",
  },
  grid: {
    name: "grid",
    method: "GET",
    desc: "九宫格",
    path: ApiConfig.baseUrl + "/apis/method/frappe.apis.apps.products_ad",
  },
  author: {
    name: "author",
    method: "GET",
    desc: "老师专栏",
    path: ApiConfig.baseUrl + "/apis/method/soa.ncov.api.coronavirus_insight_author",
  },
  company: {
    name: "company",
    method: "GET",
    desc: "公司首页介绍",
    path: ApiConfig.baseUrl + "/apis/method/frappe.apis.apps.products_ad",
  },
};
