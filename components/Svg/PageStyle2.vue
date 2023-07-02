<template>
  <svg @click="$emit('updateStyle', 'style2')" class="svg" width="18" height="18" viewBox="0 0 18 18" fill="blue" xmlns="http://www.w3.org/2000/svg">
    <rect width="8" height="8" :fill="active ? '$blueColor' :'#C4C4C4'"/>
    <rect y="10" width="8" height="8" :fill="active ? '$blueColor' :'#C4C4C4'"/>
    <rect x="10" width="8" height="8" :fill="active ? '$blueColor' :'#C4C4C4'"/>
    <rect x="10" y="10" width="8" height="8" :fill="active ? '$blueColor' :'#C4C4C4'"/>
  </svg>
</template>


<script>
export default {
  name: 'name',
  props: {
    active: {
      type: Boolean
    }
  }
}
</script>


<style lang='scss' scoped>
@import "@/styles/style.scss";
  .svg{
    cursor: pointer;
  }
</style>