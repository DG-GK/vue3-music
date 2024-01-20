<script setup lang="ts">
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body,
html,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  * {
    outline: none;
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  image {
    display: block;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
}
// 矢量图标
@import url('./assets/icon/iconfont.css');
</style>
