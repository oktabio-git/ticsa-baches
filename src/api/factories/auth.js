import {
  AUTH_URL
} from '@/shared/constants';

export default axios => ({
  login(payload) {
    return axios.post(AUTH_URL + 'auth/login', payload);
  },
  refreshToken(payload) {
    return axios.post(AUTH_URL + 'auth/refresh_token', payload);
  }
});