import * as types from "./actionTypes";


export function updateSelectedCatalogueCategory(selectedCatalogueCategory) {
  return { type: types.UPDATE_SELECTED_CATALOGUE_CATEGORY, selectedCatalogueCategory };
}

