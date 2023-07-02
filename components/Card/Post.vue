<template>
  <div class="item">
    <a class="item__title" :href="post.link" target="_blank">{{ post.title }}</a>
    <div class="item__discription">{{ post.description }}</div>
    <a :href="post.link" target="_blank" class="item__router">Подробнее</a>

    <div class="item__dop-info">
      <a :href="post.authorSite" target="_blank" class="item__link-site">{{ post.authorSite }}</a>
      <p class="item__date">{{ post.pubDate }}</p>
    </div>
  </div>

</template>


<script>
export default {
  name: 'PostItem',
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
    padding: 30px;
    display: flex;
    flex-direction: column;
    box-shadow: $boxShadow;

    &__title{
      font-size: 18px;
      font-weight: 700;
      color: $blueColor;
      line-height: 22px;
      margin: 0px 0px 25px 0px;
    }

    &__discription{
      font-size: 14px;
      line-height: 20px;
      margin: 0px 0px 20px 0px;
    }

    &__router{
      color: $blueColor;
      text-decoration:underline;
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