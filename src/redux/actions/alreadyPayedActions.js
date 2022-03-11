import * as types from "./actionTypes";
// import * as categoriesApi from "../../api/categories"; //change this

export function updateAlreadyPayed(bool) {
  return { type: types.ALREADY_PAYED, bool };
}

