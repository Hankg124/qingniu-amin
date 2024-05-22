<script lang='ts' setup>
import { ref } from 'vue';
import { getMenuDataApi } from '@/api/menu'


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
    <el-menu router active-text-color="#fff" background-color="#001529" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff">
        <el-menu-item index="/dashboard/home">
            <span>面板</span>
        </el-menu-item>
        <el-sub-menu :index="item.link" v-for="(item, index) in menuData" :key="item.id">
            <template #title>
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