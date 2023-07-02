<template>
  <!-- navigate -->
  <nav class="navigate">
    <li class="navigate__list">
      <UINavItem @click.native="fetchPosts(navItem)" v-for="navItem in navItems" :id="navItem" :key="navItem" :value="navItem" >{{ navItem }}</UINavItem>
    </li>  

    <div class="navigate__styles">
      <SvgPageStyle1 @updateStyle="updateStyle" :active="active === 'style1'"/>
      <SvgPageStyle2 @updateStyle="updateStyle" :active="active === 'style2'"/>
    </div>
  </nav>
</template>


<script>
import setUrl from '@/mixins/setUrl'
import getStyle from '@/mixins/getStyle'
import getPosts from '@/mixins/getPosts'

export default {
  name: 'LayoutNav',
  mixins: [getStyle, setUrl, getPosts],
  data(){
    return {
      navItems: ["Все","Lenta.ru","Mos.ru"]
    }
  },
  methods: {
    updateStyle(style){
      this.$store.commit("setActiveStyle",style);
      window.localStorage.setItem("activeStyle", style);
    },
    fetchPosts(site){
      this.$store.commit("posts/setOptionsSite", site)
      this.$store.commit("posts/setPage", 1)
      this.setUrl();
      this.getPosts(site)
    }
  },
  computed: {
    active(){
      return this.$store.getters.getActiveStyle;
    }
  },
  mounted(){
    this.getStyle();
  }
}
</script>


<style lang='scss' scoped>
  .navigate{
    margin: 25px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__list{
      display: flex;
      gap: 20px;
    }

    &__styles{
      display: flex;
      gap: 10px;
    }
  }
</style>