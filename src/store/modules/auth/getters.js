import store from '../../../store';

export default {
  getAuthStep(state) {
    return state.auth.step;
  },
  getAuthErrorMsg(state) {
    return state.auth.error;
  },
  getLoginTokens(state) {
    if (!state.auth.tokens) {
      const tokens = JSON.parse(localStorage.getItem('session-tokens'));
      if (tokens) store.dispatch('updateLoginTokens', tokens);
    }
    return state.auth.tokens;
  },
  getIsLogged(state) {
    if (state.auth.tokens) {
      return true;
    }
    return false;
  },
};