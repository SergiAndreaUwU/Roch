import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedCatalogueCategoryReducer(state = initialState.selectedCatalogueCategory, action) {
  switch (action.type) {
    case types.UPDATE_SELECTED_CATALOGUE_CATEGORY:
      return {...action.selectedCatalogueCategory};
    default:
      return state;
  }
}
