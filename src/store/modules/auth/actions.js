export default {
  updateAuthStep({
    commit
  }, step) {
    commit('setAuthStep', step);
  },
  updateAuthErrorMsg({
    commit
  }, msg) {
    commit('setAuthErrorMsg', msg);
  },
  updateLoginTokens({commit}, token) {
    commit('setLoginTokens', token);
  }
};