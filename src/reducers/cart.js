import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/types.js";
import { UpdateItemInCart } from "../utils/index.js";

const initialState = {
  cartitems: []
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      {
      const { payload: {menuitem, updateType}} = action;
      const { cartitems = [] } = state;
      const updatedCartItem =  UpdateItemInCart(cartitems, menuitem, updateType);
      return { ...state, ...updatedCartItem}
      }
    case REMOVE_FROM_CART:
      {
      const { payload: {menuitem, updateType}} = action;
      const { cartitems = []  } = state;
      return UpdateItemInCart(cartitems, menuitem, updateType);
      }
    default:
      return state;
  }
};

export default CartReducer;


