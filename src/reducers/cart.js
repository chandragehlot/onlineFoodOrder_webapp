import { AAA_REQ_START,
    AAA_REQ_SUCCESS,
AAA_MENU_REQ_ERR,
ADD_TO_CART
 } from '../action/types.js'
import { getCartItems } from '../utils/index.js'

const initialState = {
    cartitems: [],
    carttotal: 0
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case AAA_REQ_START:
            return{
                bbb: [],
                isLoading: true,
                isError: false
            }
        case AAA_REQ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bbb : [...action.payload],
            }
        case AAA_MENU_REQ_ERR:
            return {
                bbb : [],
                isLoading: false,
                isError: true
            }
        case ADD_TO_CART:
            return getCartItems(state, action.payload)
        default:
            return state;
    }
}

export default CartReducer;