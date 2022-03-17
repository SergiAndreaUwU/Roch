import * as types from "./actionTypes";
import * as categoriesApi from "../../apiCalls/categories"; //change this

export function loadCategorySuccess() {
  return { type: types.LOAD_CATEGORY_SUCCESS };
}

export function createCategorySuccess(category) {
  return { type: types.LOAD_CATEGORY_SUCCESS, category };
}

export function updateCategorySuccess(category) {
  return { type: types.UPDATE_CATEGORY_SUCCESS, category };
}

export function deleteCategorySuccess(category) {
  return { type: types.DELETE_CATEGORY_SUCCESS, category };
}

export function loadCategory() {
  // return function(dispatch) {
  //   return categoriesApi
  //     // .getCourses() //and this
  //     .then(categories => {
  //       dispatch(loadCategorySuccess(categories));
  //     })
  //     .catch(error => {
  //       throw error;
  //     });
  // };
}

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}


export function loadCategories() {
  return function(dispatch) {
    return categoriesApi
      .api_loadCategories() //and this
      .then(categories => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function createProductSuccess(product) {
  return { type: types.CREATE_PRODUCTS_SUCCESS, product };
}


export function deleteProductSuccess(product) {
  return { type: types.DELETE_PRODUCTS_SUCCESS, product };
}

export function switchActiveCategory(category) {
  return { type: types.SWITCH_ACTIVE_CATEGORY_SUCCESS, category };
}

export function switchActiveProduct(product) {
  return { type: types.SWITCH_ACTIVE_PRODUCT_SUCCESS, product };
}