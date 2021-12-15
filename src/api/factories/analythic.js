import {
  AUTH_URL
} from '@/shared/constants';

export default axios => ({
  getAnalythicData() {
    return axios.get(`${AUTH_URL}analythic/data`);
  },
});