<template>
  <button :class="type">
    <slot>

    </slot>
  </button>
</template>


<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String
    },
    
  }
}
</script>


<style lang='scss' scoped>
@import "@/styles/style.scss";
  .error{
    color: $blueColor;
    padding: 14px;
    font-size: 16px;
    border: 2px solid $blueColor;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0);
    width: min-content;
  }
</style>