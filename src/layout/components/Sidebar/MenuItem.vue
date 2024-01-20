<template>
    <router-link :to="path || ''" :class="['menu-item', active]">
        <span v-if="icon" :class="['iconfont icon',icon]"></span>
        <img v-if="img" class="iconImg" :src="img" alt="" />
        <div class="content">
            <slot>无</slot>
        </div>
    </router-link>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const { icon, img, path } = defineProps(["icon", "img", "path"]);
let active = computed(() => (route.path == path ? "active" : ""));
console.log(icon)
</script>

<style scoped lang="scss">
.menu-item {
    --color: #616161;
    display: flex;
    align-items: center;
    color: var(--color);
    padding: 9px 10px;
    border-radius: 6px;
    &:hover {
        background: #c0c0c06e;
    }
    &:nth-child(n + 2) {
        margin-top: 5px;
    }
    &.active {
        background: #ff4c4c;
        --color: white;
    }
    .icon {
        color: (--color);
    }
    .iconImg {
        width: 36px;
        height: 36px;
        border-radius: 4px;
        & ~ .content {
            font-size: 13px;
        }
    }
    .content {
        margin-left: 8px;
        font-size: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
