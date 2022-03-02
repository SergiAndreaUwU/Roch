import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//test
export default function categoriesReducer(state = initialState.categories, action) {
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
    default:
      return state;
  }
}
