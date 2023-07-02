<template>
  <div>
    <div v-if="type === 'style2'">
      <div v-if="isLoading" :class="type">
        <CardSkeleton v-for="(post, index) in loadingItems" :key="index"/>
      </div>

      <div v-else :class="type">
        <CardPost v-for="post in posts" :key="post.title" :post="post"/>
      </div>
    </div>

    <div v-else>
      <div v-if="isLoading" :class="type">
        <FullSkeleton v-for="(post, index) in loadingItems" :key="index"/>
      </div>

      <div v-else :class="type">
        <FullPost v-for="post in posts" :key="post.title" :post="post"/>
      </div>
    </div>


  </div>
</template>


<script>
export default {
  name: 'PostList',
  props:{
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    loadingItems(){
      return [...Array(4)];
    },
    isLoading(){
      return this.$store.state.posts.isLouding;
    },
    type(){
      return this.$store.getters.getActiveStyle;
    }
  },
}
</script>


<style lang='scss' scoped>
  .style1{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .style2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>