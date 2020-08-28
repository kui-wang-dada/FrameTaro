import * as my from "../actions/my";

const INITIAL_STATE = {
  userInfo: {},
  userInfoTran: {},
  collect: [],
  like: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case my.USER_INFO:
      return { ...state, ...action.payload };
    case my.USER_INFO_TRAN:
      return { ...state, ...action.payload };
    case my.COLLECT:
      return { ...state, ...action.payload };
    case my.LIKE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
