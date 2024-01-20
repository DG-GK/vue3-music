<template>
    <div class="sidebar">
        <Logo></Logo>
        <el-scrollbar class="scrollbar">
            <div class="menu">
                <menu-item v-for="item in fixedRoutes" :icon="item.icon" :path="item.path">{{ item.meta.title }}</menu-item>
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup>
import Logo from "./Logo.vue"
import MenuItem from "./MenuItem.vue"
import {fixedRoutes} from "@/router/index.ts"
console.log(fixedRoutes)
</script>

<style scoped lang="scss">
.sidebar {
    width: 100%;
    height: 100%;
    .scrollbar {
        height: calc(100% - 70px);
        .menu {
            padding: 10px 15px;
        }
    }
}
</style>
