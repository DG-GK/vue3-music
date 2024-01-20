<template>
  <div>
    <el-carousel trigger="click" height="450px">
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { getBanner } from "@/api/index.ts"
import { onMounted,ref } from "vue";
let banners = ref([]);
async function init(){
  let res = await getBanner();
  banners.value = res.banners;
}
onMounted(()=>{
  init();
})
</script>

<style scoped lang="scss">

</style>