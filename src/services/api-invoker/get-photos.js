import axios from 'axios';
import {configs} from '../../configs/constant';
import {apiConstant} from '../network/apiConstants';

export const GetPhotos = async () => {
  try {
    const response = await axios.get(
      `${configs.BASE_URL}${apiConstant.PHOTOS}?page=1&per_page=10&order_by=popular&client_id=${configs.ACCESS_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.log('error: GET Photos API:', error);
  }
};
