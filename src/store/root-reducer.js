import {combineReducers} from "redux";
import {appData} from "./app-data/app-data";
import {appProcess} from "./app-process/app-process";
import {userData} from "./user-data/user-data";

export const NameSpace = {
  USER: `USER`,
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};


export default combineReducers({
  [NameSpace.USER]: userData,
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
});
