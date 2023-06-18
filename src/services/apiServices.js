import { config } from '../config';
import axios from 'axios';

const getMenuItems = () => {
  return axios.get(`${config.BASE_API_URL}`).then(res=>res.data)
};

const fetchCategories = () => {
  console.log('fetching categories');
  return axios.get(`${config.BASE_API_URL}/menu/categories`).then(res=> res.data);
}

const getMenuByCategory = (category) => {
  const url = `${config.BASE_API_URL}/menu/menuitem/bycategory/${category}`;
  return axios.get(url).then(res=> res.data);
}

const addNewAddress = (data) => {
  const url = `${config.BASE_API_URL}/address/addAddress`;
  return axios.post(url, data).then((res) => {
    return res.data;
  })
}

const getAddressList = () => {
  const url = `${config.BASE_API_URL}/address/getAddressList`;
  return axios.get(url).then(res=> res.data);
}

const apiService = {
  getMenuItems,
  fetchCategories,
  getMenuByCategory,
  addNewAddress,
  getAddressList
};

export default apiService;