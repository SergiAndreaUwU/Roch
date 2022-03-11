import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import selectedCatalogueCategory from "./selectedCatalogueCategoryReducer";
import selectedMenuCategory from "./selectedMenuCategoryReducer";
import shopList from "./shopListReducer"
import alreadyPayed from "./alreadyPayedReducer";
import noTicket from "./noTicketReducer";
import paymentInfo from "./paymentInfoReducer";


const rootReducer = combineReducers({
  categories,
  selectedCatalogueCategory,
  selectedMenuCategory,
  shopList,
  alreadyPayed,
  noTicket,
  paymentInfo
});

export default rootReducer;
