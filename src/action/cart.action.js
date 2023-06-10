//import ApiService from '../services/apiServices';
import { 
    ADD_TO_CART
} from './types';

const createCartItem = (item) => {
    const totalPrice = parseInt(item.price) * parseInt(item.quantity);
    return {
        ...item,
        item_total_price: totalPrice
    }
}

export const addMenuItemToCartAction = (menuitem) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_TO_CART,
        payload: createCartItem(menuitem)
      })
    } catch (err) {
      console.log(err);      
    }
  };



