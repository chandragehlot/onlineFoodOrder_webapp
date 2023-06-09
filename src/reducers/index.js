import MenuItemReducer from './menuitems';
import CategoryReducer from './category';
import CartReducer from './cart';


import { combineReducers } from "redux";
import { AddressReducer } from './address';


export const rootReducer = combineReducers({
    menuData : MenuItemReducer,
    categories : CategoryReducer,
    cart: CartReducer,
    address: AddressReducer
});
