import moment from "moment-timezone";
import "moment/locale/zh-cn";

export * from "./common";
export * from "./constant";
export * from "./request";

moment.locale("zh-cn");

export { moment };
