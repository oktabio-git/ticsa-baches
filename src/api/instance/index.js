import axios from 'axios';
import store from '../../store';
import {
  refreshAccessToken,
  logOut,
} from '@/helpers/auth';
import {
  loaderBlackList,
  authHeaderBlackList
} from '@/shared/constants';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    Accept: 'application/json'
  },
  responseType: 'json',
});

instance.interceptors.request.use(config => {
  const endpoint = config.url.replace(config.baseURL, '');
  const foundAuth = authHeaderBlackList.find(element => config.url.includes(element));
  const found = loaderBlackList.find(element => endpoint.includes(element));

  if (!foundAuth) {
    const token = store.getters.getLoginTokens;
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  }

  if (!found) {
    store.dispatch('updateLoaderCount', +1);
  }
  return config;
});

instance.interceptors.response.use(res => {
    store.dispatch('updateLoaderCount', -1);
    return res;
  },
  error => {
    store.dispatch('updateLoaderCount', -1);
    let reqConfig = error.config;
    if (error.response && error.response.status === 401) {
      const refreshToken = store.getters.getRefreshToken;
      if (!refreshToken) {
        logOut();
      }
      const payload = {
        refreshToken
      };
      refreshAccessToken(payload)
        .then(() => instance(reqConfig))
        .catch(() => logOut());
    }
    return Promise.reject(error);
  });

export default instance;