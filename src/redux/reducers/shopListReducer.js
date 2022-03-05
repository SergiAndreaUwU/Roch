import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedMenuCategoryReducer(
  state = initialState.shopList,
  action
) {
  debugger;
  switch (action.type) {
    case types.ADD_TO_SHOP_LIST: {
      const found = state.findIndex(
        (product) => product.id === action.product.id
      );
      debugger;
      if (found >= 0) {
        const newProducts = state.map((el, index) => {
          if (index === found) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
        debugger;

        return newProducts;
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    case types.DELETE_FROM_SHOP_LIST: {
    //   const found = state.findIndex(
    //     (product) => product.id === action.product.id
    //   );
    //   debugger;
    //   if (found >= 0) {
    //     const newProducts = state.filter((el, index) => {
    //       if (index === found) {
    //         const newProduct = { ...el, quantity: el.quantity - 1 };
    //         if (!newProduct.quantity) return false;
    //         return true;
    //       }
    //       return true;
    //     });
    //     debugger;

    //     return newProducts;
    //   }
    //   return state;
    const newProducts=state.filter(product=>product.id!==action.product.id)
    debugger
    return newProducts
    }
    case types.RESET_SHOP_LIST: {
      return [];
    }
    case types.ADD_TO_SHOP_LIST_WITH_INDEX: {
      return [];
    }
    case types.DELETE_FROM_SHOP_LIST_WITH_INDEX: {
      return [];
    }
    default:
      return state;
  }
}
