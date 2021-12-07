import MenuItemReducer from './menuitems';

import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    menuData : MenuItemReducer
});
