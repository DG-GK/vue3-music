<template>
  <div class="wrapper">
    <Sidebar></Sidebar>
    <div class="right">
      <TopBar></TopBar>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar/index.vue"
import TopBar from "./components/Topbar/index.vue"
import Content from "./components/Content/index.vue"
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  display: flex;
}
</style>