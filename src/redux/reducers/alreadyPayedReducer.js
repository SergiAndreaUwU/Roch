import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//test
export default function alreadyPayedReducer(state = initialState.alreadyPayed, action) {
  switch (action.type) {
    case types.ALREADY_PAYED:
      return action.bool;
    default:
      return state;
  }
}
