import config from '../config';
import axios from 'axios';

const getMenuItems = () => {
  return axios.get(`${config.BASE_API_URL}/`).then(res=>res.data)
};

const apiService = {
  getMenuItems
};

export default apiService;
