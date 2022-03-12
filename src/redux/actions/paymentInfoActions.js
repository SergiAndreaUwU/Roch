import * as types from "./actionTypes";
// import * as categoriesApi from "../../api/categories"; //change this

export function updatePaymentInfo(paymentInfo) {
  return { type: types.UPDATE_PAYMENT_INFO, paymentInfo };
}

export function resetPaymentInfo() {
  return { type: types.RESET_PAYMENT_INFO };
}
