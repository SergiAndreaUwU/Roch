import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedMenuCategoryReducer(state = initialState.selectedMenuCategory, action) {
  switch (action.type) {
    case types.UPDATE_SELECTED_MENU_CATEGORY:
      return {...action.selectedMenuCategory};
    default:
      return state;
  }
}
