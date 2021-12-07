import config from '../config';
import axios from 'axios';

const getMenuItems = () => {
  return axios.get(`${config.BASE_API_URL}/`).then(res=>res.data)
};

const fetchCategories = () => {
  return axios.get(`${config.BASE_API_URL}/menu/menu_categories`).then(res=> res.data);
}

const apiService = {
  getMenuItems,
  fetchCategories
};

export default apiService;
