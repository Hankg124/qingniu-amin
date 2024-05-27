<template>
<el-header>
    <Top></Top>
    <Tag></Tag>
</el-header>
</template>
<script lang='ts' setup>
import { defineAsyncComponent } from 'vue';


const Top=defineAsyncComponent(()=>import('./top/index.vue'))
const Tag=defineAsyncComponent(()=>import('./tag.vue'))

</script>
<style lang='scss' scoped></style>