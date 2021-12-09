import MenuItemReducer from './menuitems';
import CategoryReducer from './category';
import CartReducer from './cart';


import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    menuData : MenuItemReducer,
    categories : CategoryReducer,
    cart: CartReducer
});
