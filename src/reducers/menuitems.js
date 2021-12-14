import {
  FETCH_MENU_REQ_START,
  FETCH_MENU_REQ_SUCCESS,
  FETCH_MENU_REQ_ERR,
} from "../action/types";

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
        menuitemsCont: { ...state.menuitemsCont, [action.category] : action.payload },
      };
    case FETCH_MENU_REQ_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default MenuItemReducer;
