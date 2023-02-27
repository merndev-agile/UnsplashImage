import axios from 'axios';
import {configs} from '../../configs/constant';
import {apiConstant} from '../network/apiConstants';

export const SearchPhotos = async searchItem => {
  try {
    const response = await axios.get(
      `${configs.BASE_URL}${apiConstant.SEARCH}?page=1&per_page=10&order_by=popular&query={${searchItem}}&client_id=${configs.ACCESS_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.log('error: Search Photo API: ', error);
  }
};
