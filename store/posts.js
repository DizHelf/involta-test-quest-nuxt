export const state = () => ({
  lentaRu: [],
  mosRu: [],
  isLouding: false,
  error: false,
  page: 1,
  limitPosts: 4,
  lastPage: 1,
  options: {
    serchFilter: "",
    site: "Все",
  },
});

export const mutations = {
  setLentaPosts(state, posts) {
    state.lentaRu = posts;
  },
  setMosPosts(state, posts) {
    state.mosRu = posts;
  },
  setLoading(state, bool) {
    state.isLouding = bool;
  },
  setError(state, error) {
    state.error = error;
  },
  setPage(state, newPage) {
    state.page = newPage;
  },
  setOptionsFilter(state, value) {
    state.options.serchFilter = value;
  },
  setOptionsSite(state, type) {
    state.options.site = type;
  },
  setLastPage(state, page) {
    state.lastPage = page;
  },
};

export const getters = {
  getAllPosts(store) {
    return [...store.mosRu, ...store.lentaRu];
  },
  // сортировка по тайтлу
  sortPostByTitle(store, getters) {
    return [...getters.getAllPosts].sort((item1, item2) =>
      item1.title.localeCompare(item2.title)
    );
  },
  // сортировка по serchFilter
  sortPostBySerch(store, getters) {
    return [...getters.sortPostByTitle].filter((post) => {
      if (typeof post.title === "string") {
        return post.title
          .toLowerCase()
          .includes(store.options.serchFilter.toLowerCase());
      }

      return false;
    });
  },
  // сортировка по page
  getPosts(store, getters) {
    return [...getters.sortPostBySerch].filter((post, index) => {
      const lastPage = store.page * store.limitPosts;

      if (index < lastPage && index > lastPage - (store.limitPosts + 1)) {
        return true;
      }
    });
  },

  getPage(store) {
    return store.page;
  },

  getError(store) {
    return store.error;
  },

  getSite(store) {
    return store.options.site;
  },

  getSearch(store) {
    return store.options.serchFilter;
  },
  getLastPage(store) {
    return store.lastPage;
  },
  getLimitPosts(store) {
    return store.limitPosts;
  },
};

export const actions = {
  async fetchLentaRu({ commit }) {
    try {
      commit("setLoading", true);
      const posts = await this.$axios.$get(
        "https://63f136aa5703e063fa547220.mockapi.io/lenta-ru"
      );
      commit("setLentaPosts", posts);
      commit("setLoading", false);
    } catch (error) {
      commit("setError", error);
    }
  },

  async fetchMosRu({ commit }) {
    try {
      commit("setLoading", true);
      const posts = await this.$axios.$get(
        "https://63f136aa5703e063fa547220.mockapi.io/mos-ru"
      );
      commit("setMosPosts", posts);
      commit("setLoading", false);
    } catch (error) {
      commit("setError", error);
    }
  },
};
