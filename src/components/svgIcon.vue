<template>
    <!-- 1.2. -->
    <el-icon :size="size" :color="color">
        <component :is="icon"></component>
    </el-icon>

<!-- 3. -->
<!-- <vnode></vnode> -->


</template>
<script lang='ts' setup>
import { resolveComponent } from 'vue';
import {h,withDefaults} from 'vue'

// 1.
// defineProps<{
//     icon:string,
//     size?:string | number,
//     color?:string
// }>()


// 2.
withDefaults(defineProps<{
    icon: string,
    color?: string,
    size?: string | number
}>(),
    {
        size: 16
    }
)


// 3.
// const prop = withDefaults(defineProps<{
//     icon:string,
//     size?:string | number,
//     color?:string
// }>(),{
//     size:16,
    
// })

// const vnode=()=>{
//     if(prop.icon){
//         return h(resolveComponent('el-icon'),{
//             size:prop.size,
//             color:prop.color
//         },[h(resolveComponent(prop.icon))])
//     }else{
//         return h('i');
//     }
// }


</script>
<style lang='scss' scoped>

</style>