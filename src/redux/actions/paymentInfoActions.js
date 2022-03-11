import * as types from "./actionTypes";
// import * as categoriesApi from "../../api/categories"; //change this

export function updatePaymentInfo(paymentInfo) {
  debugger
  return { type: types.UPDATE_PAYMENT_INFO, paymentInfo };
}

export function resetPaymentInfo() {
  debugger
  return { type: types.RESET_PAYMENT_INFO };
}
