<script lang='ts' setup>
    import {useCounterStore} from '@/stores/auth'
const store=useCounterStore();
</script>

<template>
<div class="logo">
    <img src="http://qnadmin.9yuecloud.com/assets/eye-logo-04jUtJVT.png" alt="" width="30px" height="20px">
    <h3 v-show="!store.isCollapse">青牛前端</h3>
</div>
</template>

<style lang='scss' scoped></style>