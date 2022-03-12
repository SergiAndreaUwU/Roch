import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//test
export default function paymentInfoReducer(
  state = initialState.paymentInfo,
  action
) {
  switch (action.type) {
    case types.UPDATE_PAYMENT_INFO:
      const newPaymentInfo = { ...state.paymentInfo, ...action.paymentInfo };
      return newPaymentInfo;
    case types.RESET_PAYMENT_INFO:
      return {
        totalPrice: 0.0,
        payedWith: 0.0,
      };
    default:
      return state;
  }
}
