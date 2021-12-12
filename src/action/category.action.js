import ApiService from '../services/apiServices';
import { 
  FETCH_CATEGORY_REQ_START, 
  EETCH_CATEGORY_REQ_SUCC, 
  FETCH_CATEGORY_REQ_ERR,
  SET_CATEGORY,
  FETCH_MENU_REQ_START,
  FETCH_MENU_REQ_SUCCESS,
  FETCH_MENU_REQ_ERR
} from './types';


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
      })
      props.history.push('/error')
    }
  };

  const setCategroyRedirectToMenu = (props,category) => {
    return (dispatch) => {
      dispatch({
        type: SET_CATEGORY,
        payload: category
      })
      props.history.push('/menu');
    }
  }

  const setCategroy = (category) => {
    return (dispatch) => {
      dispatch({
        type: SET_CATEGORY,
        payload: category
      })
    }
  }

  const FetchMenu = (props, category) => async (dispatch) => {
    try {
      dispatch({
        type: FETCH_MENU_REQ_START
      })
      const menuItems = await ApiService.getMenuByCategory(category);
      dispatch({
        type: FETCH_MENU_REQ_SUCCESS,
        payload: menuItems.resData
      })
    } catch (error) {
        console.log(error);
        dispatch({
          type: FETCH_MENU_REQ_ERR
        })
        props.history.push('/error')
    }
  }

export { retrieveCategories, setCategroyRedirectToMenu, FetchMenu, setCategroy };