import { doAction } from "./getData";
import common from "../../api/common";

export const OFFER_LIST = "OFFER_LIST";

export const getOfferList = (params) => doAction(params, common.offer, "OFFER_LIST", "offerList");
