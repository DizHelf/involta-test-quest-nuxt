export default {
  name: "setUrl",
  data() {
    return {
      params: {},
    };
  },
  methods: {
    setUrl() {
      this.params = {
        search: this.$store.getters["posts/getSearch"],
        site: this.$store.getters["posts/getSite"],
      };

      if (this.$store.getters["posts/getSearch"].length === 0) {
        delete this.params.search;
      }

      if (this.$store.getters["posts/getSite"] === "Все") {
        delete this.params.site;
      }

      this.$router.push({ path: this.pageRoute, query: this.params });
    },
  },
  computed: {
    storePage() {
      return this.$store.getters["posts/getPage"];
    },

    pageRoute() {
      return this.storePage < 1 ? this.storePage : "1";
    },
  },
};
