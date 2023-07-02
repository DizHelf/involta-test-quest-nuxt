<template>
  <div class="error-massage">
    <h1 class="error-massage__title">произошла ошибка попробуйте перезагрузить страницу</h1>
    <UIButton @click.native="reboot" type="error" class="error-massage__button">перезагрузить</UIButton>
  </div>

  
</template>


<script>
export default {
  name: 'Error',
  methods: {
    reboot(){
      window.location.reload();
    }
  }
}
</script>


<style lang='scss' scoped>
  .error-massage{
    margin: 20px 0px 0px 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &__title{
      font-size: 20px;
    }
  }
</style>