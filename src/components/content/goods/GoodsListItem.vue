<template>
  <div class="goods-item">
    <img :src="product.cover_url" alt="">
    <div class="goods-info">
      <p>{{product.title}}</p>
      <span class="price"><small>￥</small>{{product.price}}</span>
      <span class="collect">{{product.collects_count}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      product:Object,
      default(){
        return {}
      }
    }
  }
</script>

<style scoped lang="scss">
.goods-item{
  width: 45%;
  padding-bottom: 40px;
  position: relative;

  img{
    width: 100%;
    border-radius: 5px;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    p{
      overflow: hidden;
      /*文字超出部分变为...*/
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .price{
      color: red;
      margin-right: 30px;
    }

    .collect{
      position: relative;
    }
  }
}
</style>