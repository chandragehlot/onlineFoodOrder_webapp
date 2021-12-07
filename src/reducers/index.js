import MenuItemReducer from './menuitems';
import CategoryReducer from './category';


import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    menuData : MenuItemReducer,
    categories : CategoryReducer
});
