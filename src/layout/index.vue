<template>
    <el-container>
        <Aside></Aside>
        <el-container class="container">
            <Header></Header>
            <Main></Main>
        </el-container>
    </el-container>
</template>
<script lang='ts' setup>
import { defineAsyncComponent,onMounted } from 'vue';
import {useCounterStore} from '@/stores/auth'
const store=useCounterStore();

const Aside=defineAsyncComponent(()=>import('./aside/index.vue'))
const Header=defineAsyncComponent(()=>import('./header/index.vue'))
const Main=defineAsyncComponent(()=>import('./main/index.vue'))


onMounted(()=>{
    store.getInfo();
})


</script>
<style lang='scss' scoped>
.container{
    display: flex;
    flex-direction: column;
}
</style>