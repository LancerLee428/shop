<template>
  <div class="home">
    {{banner}}
  </div>
</template>

<script>
  import {ref, onMounted} from 'vue';
  import {getHomeAllData} from "network/home";

  export default {
    name: 'Home',
    components: {
    },
    setup() {
      const banner = ref([]);
      onMounted(() => {
        getHomeAllData().then(res => {
          banner.value = res.slides
        }).catch(err => {

        })
      });
      return {banner}
    }
  }
</script>

<style>

</style>
