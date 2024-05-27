<script lang='ts' setup>
import { ref } from 'vue';
import { getMenuDataApi } from '@/api/menu'
import {useCounterStore} from '@/stores/auth'
const store=useCounterStore();


const menuData = ref<Array<any>>([])

const getMenuFn = async () => {
    try {
        const res = await getMenuDataApi();
        menuData.value=res.data.data;
    } catch (error) {
        console.log(error);
    }
}
getMenuFn();




</script>

<template>
    <el-menu :collapse="store.isCollapse" router active-text-color="#fff" background-color="#001529" class="el-menu-vertical-demo" :default-active="$route.path" text-color="#fff">
        <el-menu-item index="/dashboard/home">
            <svgIcon icon="HelpFilled"></svgIcon>
            <span>面板</span>
        </el-menu-item>
        <el-sub-menu :index="item.link" v-for="(item, index) in menuData" :key="item.id">
            <template #title>
                <svgIcon icon="HelpFilled"></svgIcon>
                <span>{{ item.menuname }}</span>
            </template>
            <el-menu-item :index="ele.link" v-for="(ele, index) in item.children" :key="ele.id">{{ ele.menuname
                }}</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style lang='scss' scoped>
::v-deep .el-menu-item.is-active {
    background-color: #409eff;
}
</style>