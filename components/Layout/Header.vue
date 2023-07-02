<template>
  <!-- news -->
  <div class="news">
    <div class="news__info">
      <div @click="clearParamsLogo" class="news__title">Список новостей</div>

      <SvgRemoveOptions @click.native="remove"/>
    </div>
    <searth @setValue="setValueToggle" :value="searchText"/>
  </div>
</template>


<script>
import setUrl from '@/mixins/setUrl'
import clearParams from '@/mixins/clearParams'
import clearAll from '@/mixins/clearAll'

export default {
  name: 'LayoutHeader',
  data(){
    return {
      myObject: {}
    }
  },
  mixins: [setUrl, clearParams, clearAll],
  methods: {
    setValueToggle(value){
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        this.$store.commit("posts/setOptionsFilter", value);
        this.$store.commit("posts/setPage", 1)

        this.setUrl()
      }, 700);
    },

    clearParamsLogo(){
      this.clearParams()
      this.$router.push("/")
    },

    remove(){
      this.clearAll();
      this.$router.push("/")
    }
  },
  computed:{
    searchText(){
      return this.$store.getters["posts/getSearch"]
    }
  }
}
</script>




<style lang='scss' scoped>
  .news{
    padding: 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(229, 229, 229, 1);

    &__info{
      display: flex;
      gap: 30px;
    }

    &__title{
      font-size: 36px;
      font-weight: 700;
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }
</style>