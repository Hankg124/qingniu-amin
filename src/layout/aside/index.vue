<template>
<el-aside :width="store.isCollapse?'64px':'200px'">
    <Logo></Logo>
    <Menu></Menu>
</el-aside>
</template>
<script lang='ts' setup>
import { defineAsyncComponent } from 'vue';
import {useCounterStore} from '@/stores/auth'
const store=useCounterStore();

const Logo=defineAsyncComponent(()=>import('./logo.vue'))
const Menu=defineAsyncComponent(()=>import('./menu.vue'))

</script>
<style lang='scss' scoped></style>