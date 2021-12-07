import { 
    FETCH_CATEGORY_REQ_START, 
    EETCH_CATEGORY_REQ_SUCC,
    FETCH_CATEGORY_REQ_ERR
 } from "../action/types";

const initialState = {
    categoryitems: [],
    isLoading: false,
    isError: false
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQ_START:
            return{
                categoryitems: [],
                isLoading: true,
                isError: false
            }
        case EETCH_CATEGORY_REQ_SUCC:
            return {
                ...state,
                isLoading: false,
                categoryitems : [...action.payload],
            }
        case FETCH_CATEGORY_REQ_ERR:
            action.props.history.push('/error')
            return {
                categoryitems : [],
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export default CategoryReducer;