import {
  FETCH_MENU_REQ_START,
  FETCH_MENU_REQ_SUCCESS,
  FETCH_MENU_REQ_ERR,
} from "../action/types";

const initialState = {
  menuitems: [],
  isLoading: false,
  isError: false,
};

const MenuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_REQ_START:
      return {
        menuitems: [],
        isLoading: true,
        isError: false,
      };
    case FETCH_MENU_REQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menuitems: action.payload,
      };
    case FETCH_MENU_REQ_ERR:
      return {
        menuitems: [],
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default MenuItemReducer;
