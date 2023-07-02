export default {
  name: "getUrl",
  data() {
    return {
      options: {},
    };
  },
  methods: {
    getUrl(route) {
      this.options = qs.parse(route.fullPath.slice(2));

      if (this.options.search !== undefined) {
        store.commit("posts/setOptionsFilter", this.options.search);
      }
      if (this.options.site !== undefined) {
        store.commit("posts/setOptionsSite", this.options.site);
      }
    },
  },
};
