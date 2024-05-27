<template>
    <div class="flex gap-2">
        <el-tag :class="tags.length==(index+1)?'tagClass':''" v-for="(tag, index) in tags" @close="handleClose(index)" :key="tag.path" :closable="true"
            @click="router.push(tag.path)">
            {{ tag.name }}
        </el-tag>
    </div>
</template>
<script lang='ts' setup>
import router from '@/router';
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
const route = useRoute()

const isClass=ref(true);

type Tag = {
    name: string,
    path: string,
}

const tags = ref<Tag[]>([])


onMounted(() => {
    console.log(router.currentRoute.value);
    tags.value.push({
        name: router.currentRoute.value.meta.title,
        path: router.currentRoute.value.path
    } as Tag)
})



onBeforeRouteUpdate((to) => {
    console.log(to);
    const tag = {
        name: to.meta.title,
        path: to.path
    }
    const flog = tags.value.some((item) => item.path === tag.path)
    if (!flog) {
        tags.value.push(tag as Tag)
    }
    console.log(tags.value);
})


const handleClose = (i: number) => {
    tags.value.splice(i, 1)

    if (tags.value.length!=0) {
        if (i === 0) {
            router.push(tags.value[i].path)
        } else {
            router.push(tags.value[i - 1].path)
        }
    }else{
        router.push('/dashboard/home')
    }

}

</script>
<style lang='scss' scoped>
.gap-2{
    margin-top: 20px;
}
::v-deep .el-tag.el-tag--primary{
    background-color: transparent;
    border-color: #e4e7ed;
    color: #000;
    font-size: 16px;
    height: 35px;
    border-radius: 0px;
    margin: 0 5px;
    --el-tag-text-color:none;
}

.tagClass{
    background-color: #409eff !important;
    color: #fff !important;
    border-color: #fff !important;
}

</style>