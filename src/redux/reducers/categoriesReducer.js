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
    case types.DELETE_CATEGORY_SUCCESS: {
      const newCategories = state.filter(
        (category) => category.id !== action.category.id
      );
      debugger;
      return newCategories;
    }
    case types.LOAD_CATEGORY_SUCCESS:
      return action.categories;

    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories
    //PRODUCTS
    case types.CREATE_PRODUCTS_SUCCESS:
      return state;
    case types.DELETE_PRODUCTS_SUCCESS: {
      const newCategories=state.map((category)=>{
        const newProducts=category.productos.filter((product)=>product.id!==action.product.id)
        return {...category,productos:newProducts}
      })
      debugger

      return newCategories;
    }
    //SWITCH CATEGORY
    case types.SWITCH_ACTIVE_CATEGORY_SUCCESS: {
      const found = state.findIndex(
        (category) => category.id === action.category.id
      );
      if (found >= 0) {
        const newCategories = state.map((el, index) => {
          if (index === found) {
            return { ...el, activo: !el.activo };
          }
          return el;
        });
        return newCategories;
      }
      return state;
    }
    //SWITCH PRODUCT
    case types.SWITCH_ACTIVE_PRODUCT_SUCCESS: {
      const newCategories = state.map((category, i) => {
        const newCategories = category.productos.map((product, j) => {
          if (product.id === action.product.id) {
            const newProduct = { ...product, activo: !product.activo };
            return newProduct;
          }
          return product;
        });

        return { ...category, productos: newCategories };
      });
      debugger;
      return newCategories;
    }
    default:
      return state;
  }
}
