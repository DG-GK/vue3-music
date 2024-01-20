<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <Sidebar></Sidebar>
      </div>
      <div class="right">
        <div class="top">
          <TopBar></TopBar>
        </div>
        <div class="main">
          <el-scrollbar class="scrollbar">
            <Content></Content>
          </el-scrollbar>
        </div>
      </div>
    </div>
    <div class="footer">
      <Botbar></Botbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar/index.vue"
import TopBar from "./components/Topbar/index.vue"
import Content from "./components/Content/index.vue"
import Botbar from "./components/Botbar/index.vue"
</script>

<style scoped lang="scss">
.wrapper {
  height: calc(100vh);
  .header{
    display: flex;
    height: calc(100% - 81px);
    .left {
      width: 215px;
      height: 100%;
      background: #f8f8f8;
    }
    .right {
      flex: 1;
      overflow: auto;
      height: 100%;
      .top {
        height: 70px;
        background: #ff4040;
      }
      .main {
        height: calc(100% - 70px);
        overflow: auto;
        .scrollbar {
          padding: 0 16px;
        }
      }
    }
  }
  .footer {
    height: 81px;
  }
}
</style>