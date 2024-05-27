<script lang='ts' setup>
import { roleAddApi } from '@/api/permission/role';
import type { AddroleParamsType } from '@/api/types/permission/roleType';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
const emits = defineEmits(['refresh']);

const roleDrawer = ref<boolean>(false);

const roleForm = ref<AddroleParamsType>({
    remark: '',
    rolename: '',
})

const roleFormRef = ref<FormInstance>();

const rules = reactive<FormRules<AddroleParamsType>>({
    rolename: [
        { required: true, message: '请输入角色名称', trigger: 'blur' }
    ],
    remark: [
        { required: true, message: '请输入角色说明，如：超级管理员', trigger: 'blur' }
    ],
})

//提交数据
const SubmitForm = () => {
    try {
        roleFormRef.value?.validate(async (valid: boolean) => {
            if (valid) {
                await roleAddApi(roleForm.value);
                roleDrawer.value = false;
                ElMessage({
                    type: 'success',
                    message: '添加成功',
                })
                emits('refresh');
                roleFormRef.value?.resetFields();
            }
        })

    } catch (error) {
        console.log(error);
    }
}

//取消
const cancel = () => {
    roleDrawer.value = false;
}

//打开
const openDrawer = () => {
    roleDrawer.value = true;
}

defineExpose({
    openDrawer
})

</script>

<template>
    <el-drawer :close-on-click-modal="false" v-model="roleDrawer" title="创建角色" direction="rtl" :show-close="false">
        <el-form ref="roleFormRef" :rules="rules" :model="roleForm" label-width="auto" style="max-width: 600px">
            <el-form-item label="角色名称" prop="rolename">
                <el-input v-model="roleForm.rolename" placeholder="输入账户名称" />
            </el-form-item>
            <el-form-item label="角色说明" prop="remark">
                <el-input v-model="roleForm.remark" placeholder="如：超级管理员" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="SubmitForm">确定</el-button>
            </div>
        </template>
    </el-drawer>
</template>


<style lang='scss' scoped></style>