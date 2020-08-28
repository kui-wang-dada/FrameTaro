import { doAction } from "./getData";
import my from "../../api/my";
export const USER_INFO = "USER_INFO";
export const USER_INFO_TRAN = "USER_INFO_TRAN";
export const COLLECT = "COLLECT";
export const LIKE = "LIKE";

export const getUserInfo = (params) => doAction(params, my.userInfo, "USER_INFO", "userInfo");
export const getCollect = (params) => doAction(params, my.collectLike, "COLLECT", "collect");
export const getLike = (params) => doAction(params, my.collectLike, "LIKE", "like");

export const commitUserInfo = (params) => {
  return (dispatch) => {
    return dispatch({
      type: USER_INFO,
      payload: { userInfo: params },
    });
  };
};
export const commitUserInfoTran = (params) => {
  return (dispatch) => {
    return dispatch({
      type: USER_INFO_TRAN,
      payload: { userInfoTran: params },
    });
  };
};
