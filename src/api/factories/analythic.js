import {
  AUTH_URL
} from '@/shared/constants';

export default axios => ({
  getAnalythicData() {
    return axios.get(`${AUTH_URL}analythic/data`);
  },
  getAnalythicTravel(id) {
    return axios.get(`${AUTH_URL}analythic/travel_data?id=${id}`);
  } 
});