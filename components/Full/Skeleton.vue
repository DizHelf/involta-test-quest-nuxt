<template>
  <div class="skeleton">
    <div class="skeleton__content">
      <UIAnimatedPlaceholder height="100px" width="200px"/>

      <div class="skeleton__info">
        <UIAnimatedPlaceholder height="44px" width="772px"/>
        <UIAnimatedPlaceholder height="40px" width="772px"/>
      </div>
    </div>
    
    <div class="skeleton__dop-info">
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
    height: 184px;
    width: 1060px;
    padding: 30px 30px 5px 30px;
    background-color:rgba(220, 220, 220, .5);

    &__content{
      display: flex;
      gap: 30px;
      margin: 0px 0px 20px 0px;
    }

    &__info{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__dop-info{
      display: flex;
      justify-content: space-between;
    }
  }
</style>