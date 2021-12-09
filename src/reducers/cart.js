import { ADD_TO_CART } from "../action/types.js";
import { getCartItems } from "../utils/index.js";

const initialState = {
  cartitems: [],
  carttotal: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return getCartItems(state, action.payload);
    default:
      return state;
  }
};

export default CartReducer;
