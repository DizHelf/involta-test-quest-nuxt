<template>
  <div class="search" >
    <input type="text" class="search__input" @input="updateValue" :value="value">
    <img src="@/assets/svg/search.svg" alt="search" class="search__img">
  </div>
</template>


<script>
export default {
  name: 'StandertSearch',
  props:{
    value:{
      type: String,
      required: true,
    }
  },
  methods: {
    updateValue(event){
      this.$emit("setValue", event.target.value)
    }
  }
}
</script>


<style lang='scss' scoped>
@import "@/styles/style.scss";
  .search{
    display: flex;
    align-items: center;
    max-width: 321px;
    box-shadow: $boxShadow;
    border-radius: 2px;
    min-width: 32px;
    gap: 5px;
    padding: 5px;
    background-color: #fff;


    &__input{
      border: none;
      width: 100%;
      padding: 4px;

      &:focus{
        outline: none;
      }
    }

    &__img{
      max-height: 20px;
      max-height: 20px;
      fill: red;
      cursor: pointer;
    }
  }
</style>