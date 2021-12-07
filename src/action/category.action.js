import ApiService from '../services/apiServices';
import { FETCH_CATEGORY_REQ_START, EETCH_CATEGORY_REQ_SUCC, FETCH_CATEGORY_REQ_ERR } from './types';


const retrieveCategories = (props) => async (dispatch) => {
    try {
      dispatch({
        type: FETCH_CATEGORY_REQ_START
      })
      const categories = await ApiService.fetchCategories();
      dispatch({
        type: EETCH_CATEGORY_REQ_SUCC,
        payload: categories.resData
      })
    } catch (err) {
      console.log(err);
      dispatch({
        type: FETCH_CATEGORY_REQ_ERR,
        props: props
      })
    }
  };

export { retrieveCategories };