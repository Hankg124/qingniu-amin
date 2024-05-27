<script lang='ts' setup>
import { getMenuListApi } from '@/api/permission/menu';
import { roleAuthorizationApi, roleUpdateroleAuthApi } from '@/api/permission/role';
import type { Datum } from '@/api/types/permission/menuType';
import type { roleUpdateroleAuthType } from '@/api/types/permission/roleType';
import type { ElTree } from 'element-plus';
import { ref } from 'vue';


const visible = ref<boolean>(false)
const menuList = ref<Datum[]>();
const data=ref<number[]>();

// const updataData=ref<roleUpdateroleAuthType>({
//     menuIds:[],
//     roleid:0,
// });
const roleid=ref<number>(0)

// 打开弹窗
const openDialog =async (id: number) => {
    roleid.value=id;
    const res = await roleAuthorizationApi(id);
    data.value=res.data.data;
    visible.value = true;
    getMenuList();
    
}
// 暴露给父组件
defineExpose({
    openDialog
})

const getMenuList = async () => {
    const res = await getMenuListApi();
    menuList.value = res.data.data;
    console.log(menuList.value);
}


const defaultProps = {
  children: 'children',
  label: 'menuname',
}

const treeRef=ref<InstanceType<typeof ElTree>>();

//确定提交
const submit =async () => {
    visible.value = false;
    const sonRoleId=treeRef.value?.getCheckedKeys();
    console.log(sonRoleId);
    
    // const fatherRoleId=treeRef.value?.getHalfCheckedKeys();
    // console.log(fatherRoleId);
    // const menuIds=sonRoleId?.concat(fatherRoleId as number[]);
    const obj={roleid:roleid.value,menuIds:sonRoleId as number[]}
    console.log(obj);
    
    await roleUpdateroleAuthApi(obj);
}

</script>

<template>
    <el-dialog v-model="visible" title="分配权限" width="500">
        <el-tree ref="treeRef" :default-expand-all="true" :default-checked-keys="data" style="max-width: 600px" :data="menuList" show-checkbox node-key="id" :props="defaultProps" />
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary" @click="submit">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<style lang='scss' scoped></style>