<template>
    <div>
        <Left></Left>
        <Right></Right>
    </div>
</template>
<script lang='ts' setup>
import { defineAsyncComponent } from 'vue'

const Left = defineAsyncComponent(() => import('./left.vue'))
const Right = defineAsyncComponent(() => import('./right.vue'))

</script>
<style lang='scss' scoped>
div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>