<template>
  <div>
    <nav-bar>
      <template v-slot:default>图书兄弟</template>
    </nav-bar>
    
    <div class="banner">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>

    <recommend-view :recommends="recommends"></recommend-view>

    <!--//只有把元素放在属性里面，才可以实现动态的遍历，遍历的时候先使用props，-->
    <!--//然后default，声明type，然后返回-->
    <tab-control @tabClick="tabClick" :title="['畅销', '新书', '精选']"></tab-control>

    <goods-list :goods="showGoods"></goods-list>


  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import RecommendView from 'views/home/ChildComps/RecommendView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import {getHomeAllData, getHomeGoods} from "network/home"
  import {ref, reactive, onMounted, computed} from 'vue'

  export default {
    name: "Home",
    setup(){

      const recommends = ref([]);

      //商品列表数据模型
      const goods = reactive({
        sales:{page:0, list:[]},
        recommend:{page:0, list:[]},
        new:{page:0, list:[]},
      });

      let currentTypes = ref('sales');

      const showGoods = computed(() => {
        return goods[currentTypes.value].list
      });

      onMounted( ()=> {
        getHomeAllData().then(res => {
          console.log(res.goods);
          recommends.value = res.goods.data;
        });

        getHomeGoods('sales').then(res => {
          goods.sales.list = res.goods.data;
        });

        getHomeGoods('recommend').then(res => {
          goods.recommend.list = res.goods.data;
        });

        getHomeGoods('new').then(res => {
          goods.new.list = res.goods.data;
        });

      });

      const tabClick = (index)=> {
        let types = ['sales', 'new', 'recommend'];

        currentTypes.value = types[index]
      };

      return {
        recommends,
        tabClick,
        goods,
        showGoods
      }
    },
    components:{
      NavBar,
      RecommendView,
      TabControl,
      GoodsList,
    }
  }
</script>

<style scoped>
.banner img{
  width: 50px;
  height: 50px;
  margin-top: 45px;
}
</style>