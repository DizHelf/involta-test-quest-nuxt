<template>
  <div class="update">
    <img src="../../assets/svg/restart.svg" alt="update" class="update__img">
  </div>
</template>


<script>
export default {
  name: 'UpdateButton',
  methods: {
    reload(){
      window.location.reload()
    }
  },
}
</script>


<style lang='scss' scoped>
  .update{
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 2px  gray;
    cursor: pointer;

    &__img{
      width: 20px;
      height: 16px;
    }
  }
</style>