<template>
  <div>
    <div v-if="pageLimit === 0">
      <UIPaginateItem :value="1" active />
    </div>

    <div v-else-if="pageLimit < 7">
      <div class="paginaton">
        <UIPaginateItem @setPage="setPage" :active="page === index + 1" v-for="( _ , index) in pageLimit" :key="index" :value="index + 1"/>
      </div>  
    </div>

    <div v-else>
      <div v-if="page < 4" class="paginaton">
        <UIPaginateItem @setPage="setPage" :active="page === index + 1" v-for="( _ , index) in 4" :key="index" :value="index + 1"/>
        <UIPaginateItem  value="..."/>
        <UIPaginateItem @setPage="setPage" :active="page === pageLimit" :value="pageLimit"/>
      </div>

      <div v-else-if="page <= pageLimit && page > pageLimit - 3" class="paginaton">
        <UIPaginateItem @setPage="setPage" :active="page === 1" :value="1"/>
        <UIPaginateItem  value="..."/>
        <UIPaginateItem @setPage="setPage" :active="page === pageLimit + index - 3" v-for="( _ , index) in 4" :key="index" :value="pageLimit + index - 3"/>
      </div>

      <div v-else class="paginaton">
        <UIPaginateItem @setPage="setPage" :active="page === 1" :value="1"/>
        <UIPaginateItem  value="..."/>
        <UIPaginateItem @setPage="setPage" :active="page === page + index - 1" :value="page + index - 1" v-for="( _ , index) in 3" :key="index" />
        <UIPaginateItem  value="..."/>
        <UIPaginateItem @setPage="setPage" :active="page === pageLimit" :value="pageLimit"/>
      </div>
    </div>
  </div>
</template>


<script>
import setUrl from '@/mixins/setUrl'
export default {
  name: 'pagination',
  mixins: [setUrl],
  props: {
    pageLimit: {
      type: Number,
      required: true
    },
  },
  methods: {
    setPage(page){
      this.$store.commit("posts/setPage", page)
      this.setUrl()
    }
  },
  computed:{
    page(){
      return Number(this.$store.getters["posts/getPage"])
    },
  },
}
</script>


<style lang='scss' scoped>
  .paginaton{
    display: flex;
    gap: 20px;
  }
</style>