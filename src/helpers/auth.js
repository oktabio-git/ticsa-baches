import store from '../store';
import { publicRoutes } from '../shared/constants';

const refreshAccessToken = payload => this.$api.auth.refreshToken(payload)

const logOut = () => {
  store.dispatch('updateLoginTokens');
  window.location.href = window.location.href.replace(window.location.pathname, "/login");
  return;
}

const authGuard = (to, from, next) => {
  const toName = to.name.toLowerCase();
  const tokens = store.getters.getLoginTokens;
  const isLogged = tokens ? true : false;
  if (toName === 'login' && isLogged) return next('home');
  if (isLogged) return next();
  if (publicRoutes.includes(toName)) return next();
  return next('/login');
}

export {
  refreshAccessToken,
  logOut,
  authGuard,
}