<template>
  <div class="home">

    <div v-if="!isError" class="home__items">
      <PostList class="posts-list" :posts="posts"/>
      <pagination class="pagination" :pageLimit="pageLimit"/>
    </div>

    <Error v-else/>
  </div>
</template>

<script>
import qs from "qs";
import setUrl from '@/mixins/setUrl'

export default {
  name: 'IndexPage',
  layout: "HeaderLayout",
  mixins: [setUrl],
  validate({params}){
    return /^\d+$/.test(params.page)
  },
  async fetch({store, route}){
    //добовляем в стор данные из url
    const options = qs.parse(route.query)
    store.commit("posts/setPage", route.params.page)

    if (options.search !== undefined) {
      store.commit("posts/setOptionsFilter", options.search);
    }
    if (options.site !== undefined) {
      store.commit("posts/setOptionsSite", options.site);
    }

    //логика запросов
    const site = store.getters["posts/getSite"];
    if (site === "Lenta.ru") {
      await store.dispatch("posts/fetchLentaRu");
    }

    else if (site === "Mos.ru") {
      await store.dispatch("posts/fetchMosRu");
    }

    else {
      await store.dispatch("posts/fetchLentaRu");
      await store.dispatch("posts/fetchMosRu");
    }

    store.commit("posts/setLastPage", Math.ceil(Number(store.getters["posts/sortPostBySerch"].length) / Number(store.getters["posts/getLimitPosts"])));
  },
  computed: {
    posts(){
      return this.$store.getters["posts/getPosts"];
    },
    pageLimit(){
      return Math.ceil(Number(this.$store.getters["posts/sortPostBySerch"].length) / Number(this.$store.getters["posts/getLimitPosts"]));
    },
    isError(){
      return this.$store.getters["posts/getError"];
    }
  },
  created(){
    const lastPage = this.$store.getters["posts/getLastPage"];
    const thisPage = this.$store.getters["posts/getPage"];

    if (lastPage <  thisPage || thisPage < 1) {
      this.$store.commit("posts/setPage", 1);
    }
  }
}
</script>

<style scoped lang="scss">
  .posts-list{
    margin: 0px 0px 60px 0px;
  }

  .pagination{
    max-width: min-content;
    margin: 0 auto 30px;
  }
</style>