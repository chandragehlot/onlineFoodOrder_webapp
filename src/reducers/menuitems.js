import {
  FETCH_MENU_REQ_START,
  FETCH_MENU_REQ_SUCCESS,
  FETCH_MENU_REQ_ERR,
  UPDATE_MENUITEM_QUANTIFY,
} from "../action/types";
import { updateMenuItemQuantity } from "../utils";

const initialState = {
  menuitemsCont: {},
  isLoading: false,
  isError: false,
};

const MenuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_REQ_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_MENU_REQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menuitemsCont: {
          ...state.menuitemsCont,
          [action.category]: action.payload,
        },
      };
    case FETCH_MENU_REQ_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case UPDATE_MENUITEM_QUANTIFY:
      const {
        payload: { menuitem, selectedCategory, updateType },
      } = action;
      const { menuitemsCont } = state;
      const currentMenuItems = menuitemsCont[selectedCategory];
      const updatedMenu =  updateMenuItemQuantity(currentMenuItems, menuitem, updateType);
      return {
        ...state,
        menuitemsCont: {
          ...menuitemsCont,
          [selectedCategory]: updatedMenu,
        },
      };
    default:
      return state;
  }
};

export default MenuItemReducer;
