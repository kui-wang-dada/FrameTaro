import { getData } from "../../utils/request";

export function doAction(params, urlData, dispatchType, stateData, other = {}) {
  console.log("e", params, urlData, dispatchType, stateData, other);
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      getData(params, urlData)
        .then((res) => {
          let resData = res.data.display;
          if (!res.data.display) {
            resolve(res.data.display);
            return;
          }
          if (other.key) {
            resData = res.data.display[other.key];
          }
          if (other.arrayOne) {
            resData = res.data.display[0];
          }

          let newRes;
          if (other.model) {
            newRes = other.model(resData);
          } else {
            newRes = resData;
          }
          let reducer = {
            type: "",
            payload: {},
          };
          reducer.type = dispatchType;

          reducer.payload[stateData] = newRes;
          console.log(reducer, "reducer");
          dispatch(reducer);
          resolve(newRes);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
