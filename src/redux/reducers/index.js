import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import selectedCatalogueCategory from "./selectedCatalogueCategoryReducer";
import selectedMenuCategory from "./selectedMenuCategoryReducer";
import shopList from "./shopListReducer"


const rootReducer = combineReducers({
  categories,
  selectedCatalogueCategory,
  selectedMenuCategory,
  shopList
});

export default rootReducer;
