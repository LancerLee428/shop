<template>
  <div class="tab-control">
    <!--//在属性里使用v-for，一定要加上 :key 否则会出错-->
    <div v-for="(item, index) in title"
         :key="index"
         @click="itemClick(index)"
         class="tab-control-item" :class="{active:index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    name: "TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    setup(props, {emit}){
      let currentIndex = ref(0);

      //使用ref声明的方法，必须加上value
      const itemClick = (index)=>{
        currentIndex.value = index;
        emit('tabClick', index);
      };

      return{
        currentIndex,
        itemClick
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-control{
    height: 40px;
    line-height: 40px;
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #FFFFFF;
    width: 100%;
    z-index: 10;

    /*能够让鼠标在内容位置悬停*/
    position: sticky;
    top:45px;


    .tab-control-item{
      flex: 1;
      span{
        padding: 3px;
      }
    }

    .active{
      color: var(--color-tint);
      span{
        border-bottom: 3px solid var(--color-tint)
      }
    }
  }
</style>