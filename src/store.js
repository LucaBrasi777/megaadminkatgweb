// store.js
// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedIds: [],
  },
  mutations: {
    updateSelectedIds(state, ids) {
      state.selectedIds = ids;
    },
  },
  actions: {
    updateSelectedIds(context, ids) {
      context.commit('updateSelectedIds', ids);
    },
  },
  getters: {
    getSelectedIds: (state) => state.selectedIds,
  },
});
