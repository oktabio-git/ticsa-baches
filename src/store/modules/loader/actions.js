export default {
  updateLoaderCount({
    commit
  }, count) {
    commit('setLoaderCount', count);
  },
};