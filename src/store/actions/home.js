import { doAction } from "./getData";
import home from "../../api/home";

export const HOME_AUTHOR_LIST = "HOME_AUTHOR_LIST";
export const HOME_BANNER = "HOME_BANNER";
export const HOME_GRID = "HOME_GRID";
export const HOME_COMPANY = "HOME_COMPANY";

export const getHomeAuthorList = (params) => doAction(params, home.author, "HOME_AUTHOR_LIST", "homeAuthorList");
export const getHomeBanner = (params) => doAction(params, home.banner, "HOME_BANNER", "homeBanner");
export const getHomeGrid = (params) => doAction(params, home.grid, "HOME_GRID", "homeGrid");
export const getHomeCompany = (params) => doAction(params, home.company, "HOME_COMPANY", "homeCompany", { arrayOne: true });
