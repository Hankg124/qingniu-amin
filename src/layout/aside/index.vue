<template>
<el-aside width="200px">
    <Logo></Logo>
    <Menu></Menu>
</el-aside>
</template>
<script lang='ts' setup>
import { defineAsyncComponent } from 'vue';


const Logo=defineAsyncComponent(()=>import('./logo.vue'))
const Menu=defineAsyncComponent(()=>import('./menu.vue'))

</script>
<style lang='scss' scoped></style>