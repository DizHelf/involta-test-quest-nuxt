<template>
  <div class="container">
    <header class="header">
      <LayoutHeader/>
      <LayoutNav/>
    </header>

    <nuxt/>
  </div>
</template>


<script>
export default {
  data(){
    return {
      activLink: "Все",
      timer: null,
    }
  },
}
</script>


<style lang='scss'>
@import "@/styles/style.scss";

  .container{
    width: 1120px;
    margin: 0 auto;
    padding: 0 30px;
  }
  
</style>