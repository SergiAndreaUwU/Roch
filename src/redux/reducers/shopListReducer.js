import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedMenuCategoryReducer(
  state = initialState.shopList,
  action
) {
  switch (action.type) {
    case types.ADD_TO_SHOP_LIST: {
      const found = state.findIndex(
        (product) => product.id === action.product.id
      );
      if (found >= 0) {
        const newProducts = state.map((el, index) => {
          if (index === found) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });

        return newProducts;
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    case types.DELETE_FROM_SHOP_LIST: {
      const newProducts = state.filter(
        (product) => product.id !== action.product.id
      );
      return newProducts;
    }
    case types.RESET_SHOP_LIST: {
      return [];
    }
    case types.ADD_ONE_TO_SHOP_LIST_WITH_INDEX: {
      return [];
    }
    case types.DELETE_ONE_FROM_SHOP_LIST: {
      const found = state.findIndex(
        (product) => product.id === action.product.id
      );
      if (found >= 0) {
        const newProducts = state.map((el, index) => {
          if (index === found) {
            if(state[index].quantity==1){
              return el
            }
            return { ...el, quantity: el.quantity - 1 };
          }
          return el;
        });
        return newProducts;
      }
      return state
    }
    default:
      return state;
  }
}
