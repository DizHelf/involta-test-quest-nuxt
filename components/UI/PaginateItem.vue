<template>
  <div class="page-item" :class="isActive" @click="setPage" >{{ value }}</div>
</template>


<script>
export default {
  name: 'PageItem',
  props: {
    value: {
      type: Number,
    },
    active: {
      type: Boolean,
    },
  },
  computed:{
    isActive(){
      return this.active ? "active" : ""
    },
  },
  methods: {
    setPage(){
      this.$emit("setPage", this.value)
    }
  },
}
</script>


<style lang='scss' scoped>
@import "@/styles/style.scss";
  .page-item{
    color: black;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-weight: 700;
    font-size: 18px;
  }

  .active{
    color: $blueColor;
  }
</style>