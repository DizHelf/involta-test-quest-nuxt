export default {
  name: "getPosts",
  methods: {
    async getPosts(site) {
      if (site === "Lenta.ru") {
        this.$store.commit("posts/setMosPosts", []);
        await this.$store.dispatch("posts/fetchLentaRu");
      } else if (site === "Mos.ru") {
        this.$store.commit("posts/setLentaPosts", []);
        await this.$store.dispatch("posts/fetchMosRu");
      } else {
        await this.$store.dispatch("posts/fetchLentaRu");
        await this.$store.dispatch("posts/fetchMosRu");
      }

      this.$store.commit(
        "posts/setLastPage",
        Math.ceil(this.postsLength / this.limitPosts)
      );
    },
  },
  computed: {
    postsLength() {
      return Number(this.$store.getters["posts/getAllPosts"].length);
    },
    limitPosts() {
      return Number(this.$store.getters["posts/sortPostBySerch"]);
    },
  },
};
