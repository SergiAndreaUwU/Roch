import * as types from "./actionTypes";
// import * as categoriesApi from "../../api/categories"; //change this

export function updateNoTicket(noTicket) {
  return { type: types.UPDATE_NO_TICKET, noTicket };
}

export function incrementNoTicket() {
    return { type: types.INCREASE_NO_TICKET };
  }