import * as types from "./actionTypes";
// import * as categoriesApi from "../../api/categories"; //change this

export function loadCategorySuccess(products) {
  return { type: types.LOAD_CATEGORY_SUCCESS, products };
}

export function createCategorySuccess(product) {
  return { type: types.LOAD_CATEGORY_SUCCESS, product };
}

export function updateCategorySuccess(products) {
  return { type: types.UPDATE_CATEGORY_SUCCESS, products };
}

export function deleteCategorySuccess(products) {
  return { type: types.UPDATE_CATEGORY_SUCCESS, products };
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
