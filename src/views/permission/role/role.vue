<script lang='ts' setup>
import { defineAsyncComponent, ref } from 'vue';
import { roleDeleteApi, roleListApi } from '@/api/permission/role';
import type { List } from '@/api/types/permission/roleType';
import { ElMessage, ElMessageBox } from 'element-plus';

const RoleDrawer = defineAsyncComponent(() => import('./role-drawer.vue'))
const RoleDialog = defineAsyncComponent(() => import('./role-dialog.vue'))


const pageNum = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);

const roleList = ref<List[]>();

//获取角色列表
const getRoleList = async () => {
    try {
        const res = await roleListApi({ pageNum: pageNum.value, pageSize: pageSize.value });
        roleList.value = res.data.data.list;
        total.value = res.data.data.total;
    } catch (error) {
        console.log(error);

    }
}
getRoleList();

//打开抽屉
const RoleDrawerRef = ref<InstanceType<typeof RoleDrawer>>();
const addRole = () => {
    RoleDrawerRef.value?.openDrawer();
}

//刷新
const refresh = () => {
    getRoleList();
}

//删除
const deleteRole = (id: number) => {
    try {
        ElMessageBox.confirm(
            '确认删除吗？删除后内容不可恢复?',
            '删除',
            {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }
        )
            .then(async() => {
                //删除角色
                await roleDeleteApi(id);
                //刷新列表
                getRoleList();
                ElMessage({
                    type: 'success',
                    message: '删除成功',
                })
            })
            .catch(() => {
                ElMessage({
                    type: 'info',
                    message: '取消删除',
                })
            })
    } catch (error) {
        console.log(error);

    }
}

//授权
const RoleDialogRef=ref<InstanceType<typeof RoleDialog>>()
const authorization=(id:number)=>{
    RoleDialogRef.value?.openDialog(id);
}



</script>

<template>
    <div>
        <div class="border-shadow nav">
            <div class="left">
                <el-input style="width: 240px" placeholder="输入角色搜索" />
                <el-button type="primary" style="margin-left: 10px;">查询</el-button>
            </div>
            <el-button type="primary" icon="plus" @click="addRole">创建角色</el-button>
        </div>

        <div class="table-border-shadow">
            <el-table :data="roleList" height="340" style="width: 100%">
                <el-table-column prop="id" label="角色id" />
                <el-table-column prop="rolename" label="角色名称" />
                <el-table-column prop="remark" label="角色说明" />
                <el-table-column prop="createdAt" label="创建时间" />
                <el-table-column label="操作">
                    <template #default="{ row }">
                        <el-button type="primary" link @click="authorization(row.id)">授权</el-button>
                        <el-button type="danger" link @click="deleteRole(row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-row justify="center">
                <el-pagination background layout="prev, pager, next" :total="total" style="margin:20px 0;" />
            </el-row>
        </div>
        <RoleDrawer ref="RoleDrawerRef" @refresh="refresh"></RoleDrawer>
        <RoleDialog ref="RoleDialogRef"></RoleDialog>
    </div>
</template>

<style lang='scss' scoped></style>