<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="算法简介" name="first">
            <img src="../assets/JM模型参数计算.png" alt="">
            <img src="../assets/JM模型参数计算2.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="U图" name="second">U图</el-tab-pane>
        <el-tab-pane label="Y图" name="third">Y图</el-tab-pane>
        <el-tab-pane label="K-S检验" name="fourth">K-S检验</el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>