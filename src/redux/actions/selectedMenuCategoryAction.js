import * as types from "./actionTypes";


export function updateSelectedMenuCategory(selectedMenuCategory) {
  return { type: types.UPDATE_SELECTED_MENU_CATEGORY, selectedMenuCategory };
}

