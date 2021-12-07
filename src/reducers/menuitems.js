import { 
    FETCH_MENU_REQ_START, 
    EETCH_MENU_REQ_SUCC,
    FETCH_MENU_REQ_ERR
 } from "../action/types";

const initialState = {
    menitems: [],
    isLoading: false,
    isError: false
}

const MenuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_REQ_START:
            return{
                menitems: [],
                isLoading: true,
                isError: false
            }
        case EETCH_MENU_REQ_SUCC:
            return {
                ...state,
                isLoading: false,
                menitems : [...action.payload],
            }
        case FETCH_MENU_REQ_ERR:
            action.props.history.push('/error')
            return {
                menitems : [],
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export default MenuItemReducer;