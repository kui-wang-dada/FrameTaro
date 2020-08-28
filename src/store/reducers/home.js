import * as home from "../actions/home";

const INITIAL_STATE = {
  homeAuthorList: [],
  homeBanner: [],
  homeGrid: [],
  homeCompany: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case home.HOME_AUTHOR_LIST:
      return { ...state, ...action.payload };
    case home.HOME_BANNER:
      return { ...state, ...action.payload };
    case home.HOME_GRID:
      return { ...state, ...action.payload };
    case home.HOME_COMPANY:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
