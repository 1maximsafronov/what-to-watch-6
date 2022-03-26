import {ActionType} from "../actions";
import {AuthorizationStatus} from "../../const";


const initialState = {
  userInfo: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};


const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case ActionType.RESET_USER_INFO:
      return {
        ...state,
        userInfo: {}
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }

  return state;
};


export {userData};
