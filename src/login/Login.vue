<script lang='ts' setup>
import { loginApi } from '@/api/auth';
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import {useCounterStore} from '@/stores/auth'
const store=useCounterStore();
import {useRouter} from 'vue-router'
const router = useRouter();

const ruleForm = ref({
    username: "admin",//admin
    password: "abc12345"//abc12345
})

const rules = reactive<FormRules<typeof ruleForm>>({
    username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入用户密码', trigger: 'blur' },
  ]
})

const ruleFormRef=ref<FormInstance>()

//登录
const submitForm=()=>{
    ruleFormRef.value?.validate(async(valid:boolean)=>{
        if(valid){
            const res = await loginApi(ruleForm.value);
            if(res.data.code==200){
                store.token=res.data.data;
                localStorage.setItem('token',res.data.data)
                router.push('/');
            }
        }
    })
}

</script>

<template>
    <div class="login">
        <p>用户登录</p>
        <span>青牛前端后台管理系统</span>
        <el-form ref="ruleFormRef" style="width: 100%;" :model="ruleForm" :rules="rules"
            label-width="auto" class="demo-ruleForm">
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" type="text" placeholder="输入用户名" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input show-password v-model="ruleForm.password" type="password" placeholder="输入用户密码" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="submitForm">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang='scss' scoped>
.login {
    width: 350px;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    p{
        font-size: 24px;
        margin: 0;
    }
    span{
        display: block;
        font-size: 14px;
        color: #909399;
        margin: 10px 0;
    }
}
</style>