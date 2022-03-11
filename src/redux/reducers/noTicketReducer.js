import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function noTicketReducer(state = initialState.noTicket, action) {
  switch (action.type) {
    case types.UPDATE_NO_TICKET:
      return action.noTicket;
    case types.INCREASE_NO_TICKET:
      const newTicketAmount = state + 1;
      return newTicketAmount;
    default:
      return state;
  }
}
