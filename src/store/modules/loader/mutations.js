export default {
  setLoaderCount(state, value) {
    let temp = state.loader.count + value;
    if (temp >= 0) {
      state.loader.count = temp;
    }
  },
};