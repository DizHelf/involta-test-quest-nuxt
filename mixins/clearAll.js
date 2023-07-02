export default {
  name: "clearAll",
  methods: {
    clearAll() {
      this.$store.commit("posts/setPage", 1);
      this.$store.commit("posts/setOptionsFilter", "");
      this.$store.commit("posts/setOptionsSite", "Все");
      this.$store.commit("setActiveStyle", "style1");
      window.localStorage.removeItem("activeStyle");
    },
  },
};
