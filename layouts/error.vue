<template>
  <div class="error">
    <h1 class="error__title">Произошла ошибка!</h1>
    <nuxt-link class="error__link" to="/">Вернуться на главную страницу!</nuxt-link>
  </div>
</template>


<script>
export default {
  name: 'name',
  
}
</script>


<style lang='scss' scoped>
  .error{
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &__title{
      font-size: 40px;
    }

    &__link{
      font-size: 18px;
      
    }
  }
</style>