<template>
  <div class="nav-item" :class="activate">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'NavItem',
  props:{
    value: {
      type: String,
      required: true
    },
  },
  computed: {
    activate(){
      return this.$store.getters["posts/getSite"] === this.value ? 'active' : '';
    }
  },
}
</script>


<style lang='scss' scoped>
@import "@/styles/style.scss";
  .nav-item{
    color: $blueColor;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }

  .active{
    color: black;
  }
</style>