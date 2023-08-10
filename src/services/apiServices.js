import { config } from '../config';
import axios from 'axios';

const getMenuItems = () => {
  return axios.get(`${config.BASE_API_URL}`).then(res=>res.data)
};

const fetchCategories = () => {
  console.log('fetching categories');
  return axios.get(`${config.BASE_API_URL}/product/allcategories`).then(res=> res.data);
}

const getMenuByCategory = (category) => {
  const url = `${config.BASE_API_URL}/product/bycategory/${category}`;
  return axios.get(url).then(res=> res.data);
}

const addNewAddress = (data) => {
  const url = `${config.BASE_API_URL}/address/user/add`;
  return axios.post(url, data).then((res) => {
    return res.data;
  })
}

const getAddressList = () => {
  const url = `${config.BASE_API_URL}/address/user/get?userName=UserId1`;
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