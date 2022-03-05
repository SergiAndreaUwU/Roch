import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import selectedCatalogueCategory from "./selectedCatalogueCategoryReducer";
import selectedMenuCategory from "./selectedMenuCategoryReducer";


const rootReducer = combineReducers({
  categories,
  selectedCatalogueCategory,
  selectedMenuCategory
});

export default rootReducer;
