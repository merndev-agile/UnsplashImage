import axios from 'axios';
import {configs} from '../../configs/constant';
import {apiConstant} from '../network/apiConstants';

export const SearchPhotos = async (searchItem, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${configs.BASE_URL}${apiConstant.SEARCH}?page=1&per_page=10&order_by=popular&query={${searchItem}}&client_id=${configs.ACCESS_KEY}`,
    );
    setLoading(false);
    return response.data;
  } catch (error) {
    console.log('error: Search Photo API: ', error);
    setLoading(false);
  }
};
