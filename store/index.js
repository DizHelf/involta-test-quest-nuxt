export const state = () => ({
  activeStyle: "style1",
});

export const mutations = {
  setActiveStyle(state, style) {
    state.activeStyle = style;
  },
};

export const getters = {
  getActiveStyle(state) {
    return state.activeStyle;
  },
};
