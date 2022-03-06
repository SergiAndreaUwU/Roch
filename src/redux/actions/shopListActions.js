import * as types from "./actionTypes";

export function addToShopList(product) {
  return { type: types.ADD_TO_SHOP_LIST, product };
}

export function deleteFromShopList(product) {
  return { type: types.DELETE_FROM_SHOP_LIST, product };
}

//id product
export function addToShopListWithIndex(product) {
  return { type: types.ADD_ONE_TO_SHOP_LIST_WITH_INDEX, product };
}

//id product
export function deleteFromShopListWithIndex(product) {
  return { type: types.DELETE_ONE_FROM_SHOP_LIST_WITH_INDEX, product };
}
export function resetShopList() {
  return { type: types.RESET_SHOP_LIST };
}
