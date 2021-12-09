import {
  FETCH_CATEGORY_REQ_START,
  EETCH_CATEGORY_REQ_SUCC,
  FETCH_CATEGORY_REQ_ERR,
  SET_CATEGORY,
} from "../action/types";

const initialState = {
  categoryitems: [],
  selectedCategory: "",
  isLoading: false,
  isError: false,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQ_START:
      return {
        categoryitems: [],
        isLoading: true,
        isError: false,
      };
    case EETCH_CATEGORY_REQ_SUCC:
      return {
        ...state,
        isLoading: false,
        categoryitems: [...action.payload],
      };
    case FETCH_CATEGORY_REQ_ERR:
      return {
        categoryitems: [],
        isLoading: false,
        isError: true,
      };
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
