import {combineReducers} from "redux";
import {reducer as dataReducer} from "./data/data.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
});
