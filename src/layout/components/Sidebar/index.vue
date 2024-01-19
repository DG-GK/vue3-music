<template>
    <div class="sidebar">
        <Logo></Logo>
        <el-scrollbar class="scrollbar">
            <div class="menu">
                菜单
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup>
import Logo from "./Logo.vue"
</script>

<style scoped lang="scss">
.sidebar {
    width: 100%;
    height: 100%;
    .scrollbar {
        height: calc(100% - 70px);
        .menu {
            padding: 0 15px;
        }
    }
}
</style>
