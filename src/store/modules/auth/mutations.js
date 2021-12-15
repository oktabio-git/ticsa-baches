export default {
  setAuthStep(state, step) {
    if (state.auth.step !== step) {
      state.auth.step = step;
    }
  },
  setAuthErrorMsg(state, msg) {
    state.auth.error = msg;
  },
  setLoginTokens(state, tokens = null) {
    state.auth.tokens = tokens;
    if (tokens) {
      localStorage.setItem('session-tokens', JSON.stringify(tokens));
    } else {
      localStorage.removeItem('session-tokens');
    }
  },
};