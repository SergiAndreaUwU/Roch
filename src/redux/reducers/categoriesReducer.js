import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function categoriesReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case types.CREATE_CATEGORY_SUCCESS:
      return [...state, { ...action.category }];
    case types.UPDATE_CATEGORY_SUCCESS:
      return state.map((category) =>
        category.id === action.category.id ? action.category : category
      );
    case types.DELETE_CATEGORY_SUCCESS:
      return state.map((category) =>
        category.id === action.category.id ? action.category : category
      );
    case types.LOAD_CATEGORY_SUCCESS:
      return action.categories;
    //PRODUCTS
    case types.CREATE_PRODUCTS_SUCCESS:
      return state;
    case types.DELETE_PRODUCTS_SUCCESS:
      return state;

    //SWITCH CATEGORY
    case types.SWITCH_ACTIVE_CATEGORY_SUCCESS: {
      const found = state.findIndex(
        (category) => category.id === action.category.id
      );
      if (found >= 0) {
        const newCategories = state.map((el, index) => {
          if (index === found) {
            return { ...el, active: !el.active };
          }
          return el;
        });
        return newCategories;
      }
      return state;
    }
    //SWITCH PRODUCT
    case types.SWITCH_ACTIVE_PRODUCT_SUCCESS: {
      const found = state.findIndex(
        (category) => category.id === action.category.id
      );
      if (found >= 0) {
        const newCategories = state.map((el, index) => {
          if (index === found) {
            return { ...el, active: !el.active };
          }
          return el;
        });
        return newCategories;
      }
      return state;
    }
    default:
      return state;
  }
}
