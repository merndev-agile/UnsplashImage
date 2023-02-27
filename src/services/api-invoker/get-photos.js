import axios from 'axios';
import {configs} from '../../configs/constant';
import {apiConstant} from '../network/apiConstants';

export const GetPhotos = async setLoading => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${configs.BASE_URL}${apiConstant.PHOTOS}?page=1&per_page=10&order_by=popular&client_id=${configs.ACCESS_KEY}`,
    );
    setLoading(false);
    return response.data;
  } catch (error) {
    console.log('error: GET Photos API:', error);
    setLoading(true);
  }
};
