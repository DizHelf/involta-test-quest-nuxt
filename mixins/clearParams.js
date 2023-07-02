export default {
  name: "clearParams",
  methods: {
    clearParams() {
      this.$store.commit("posts/setOptionsFilter", "");
      this.$store.commit("posts/setOptionsSite", "Все");
    },
  },
};
