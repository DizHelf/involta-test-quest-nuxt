<template>
  <div class="skeleton">
    <UIAnimatedPlaceholder class="skeleton__m25" height="60px" width="460px"/>
    <UIAnimatedPlaceholder class="skeleton__m20" height="40px" width="460px"/>
    <UIAnimatedPlaceholder class="skeleton__m20" height="20px" width="80px"/>
    <div class="skeleton__info">
      <UIAnimatedPlaceholder height="20px" width="80px"/>
      <UIAnimatedPlaceholder height="20px" width="80px"/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CardSkeleton',
  
}
</script>


<style lang='scss' scoped>
  .skeleton{
    height: 256px;
    width: 520px;
    padding: 30px;
    background-color:rgba(220, 220, 220, .5);

    &__m25{
      margin: 0px 0px 25px 0px;
    }

    &__m20{
      margin: 0px 0px 20px 0px;
    }

    &__info{
      display: flex;
      justify-content: space-between;
    }
  }
</style>
