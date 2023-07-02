<template>
  <div class="item">
    <div class="item__content">
      <img class="item__img" :src="post.img" :alt="post.img">

      <div class="item__info">
        <a :href="post.link" target="_blank" class="item__title">{{ post.title }}</a>
        <p class="item__discription">{{ post.description }}</p>
      </div>
    </div>
    
    <div class="item__dop-info">
      <a :href="post.authorSite" target="_blank" class="item__link-site">{{ post.authorSite }}</a>
      <p class="item__date">{{ post.pubDate }}</p>
    </div>
  </div>

</template>


<script>
export default {
  name: 'FullPost',
  props: {
    post: {
      type: Object,
      required: true
    },
  }
}
</script>


<style lang='scss' scoped>
@import "@/styles/style.scss";
  .item{
    padding: 30px 30px 5px 30px;
    display: flex;
    flex-direction: column;
    box-shadow: $boxShadow;

    &__content{
      display: flex;
      gap: 30px;
      margin: 0px 0px 20px 0px;
    }

    &__img{
      width: 200px;
      height: 100px;
      min-width: 200px;
    }

    &__info{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__title{
      font-size: 18px;
      font-weight: 700;
      color: $blueColor;
      line-height: 22px;
    }

    &__discription{
      font-size: 14px;
      line-height: 20px;
      margin: 0px 0px 20px 0px;
    }

    &__dop-info{
      display: flex;
      justify-content: space-between;
    }

    &__link-site, &__date{
      color: rgba(220, 220, 220, 1);
    }
  }
</style>