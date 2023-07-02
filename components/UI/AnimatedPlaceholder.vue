<template>
  <div class="placeholder">
    &nbsp;
  </div>
</template>


<script>
export default {
  name: 'AnimatedPlaceholder',
  props: {
    height: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    borderRadius: {
      type: String,
    },
  }
}
</script>


<style lang='scss' scoped>
  @keyframes bgAnimate {
    0% {
      background-position: 100% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }
  .placeholder{
    height: v-bind(height);
    width: v-bind(width);
    border-radius: v-bind(borderRadius);
    background-image: linear-gradient(
      to right,
  #d6d7d8 0%,
  #e2e3e4 10%,
  #d6d7d8 20%,
  #d6d7d8 100%
    );
    background-size: 200% 100%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
    animation: bgAnimate 1.2s linear infinite;
  }
</style>