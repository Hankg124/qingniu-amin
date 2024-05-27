<template>
<el-dropdown trigger="click">
        <span class="el-dropdown-link">
          admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="quit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>
<script lang='ts' setup>
const quit=()=>{
    localStorage.removeItem('token')
    location.reload()
}
</script>
<style lang='scss' scoped>

</style>