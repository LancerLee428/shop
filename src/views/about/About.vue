<template>
  <div>
    <nav-bar>
      <template v-slot:default>详情页面:{{id}}</template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {useRoute} from 'vue-router'
  import {ref} from 'vue'

  export default {
    name: "About",
    components:{
      NavBar
    },
    setup(){
      const route = useRoute();

      let id = ref(0);

      id.value = route.query.id;

      return{
        id
      }
    }
  }
</script>

<style scoped>

</style>