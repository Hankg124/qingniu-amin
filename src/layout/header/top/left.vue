<template>
<div>
    <!-- 左侧图标 -->
    <svgIcon v-show="store.isCollapse" icon="Expand" size="25" @click="store.isCollapse=!store.isCollapse"></svgIcon>
    <svgIcon v-show="!store.isCollapse" icon="Fold" size="25" @click="store.isCollapse=!store.isCollapse"></svgIcon>

    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">
    <a @click="breadcrumbFn(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>
<script lang='ts' setup>
import {useCounterStore} from '@/stores/auth'
import { ref } from 'vue';
const store=useCounterStore();
import {onBeforeRouteUpdate, useRoute,useRouter, type RouteLocationNormalizedLoaded, type RouteRecordNormalized} from 'vue-router'
const route=useRoute();
const router=useRouter();

const breadcrumbList=ref<RouteRecordNormalized[]>();

const getBreadcrumb=(to:RouteLocationNormalizedLoaded)=>{
    const matched=to.matched.filter((item)=>item.meta&&item.meta.title);
    breadcrumbList.value=matched;
    
}

getBreadcrumb(route);

onBeforeRouteUpdate((to,from)=>{
    getBreadcrumb(to);
})

const breadcrumbFn=(item:RouteRecordNormalized)=>{
    console.log(item);
    const {path,redirect} = item;
    if(redirect){
        router.push(redirect as string);
    }else{
        router.push(path);
    }
}

</script>
<style lang='scss' scoped>

</style>