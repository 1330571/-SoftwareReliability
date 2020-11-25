<template>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane name="first">
            <span slot="label" ><i class="el-icon-document-copy" ></i> 算法简介 </span>
            <img src="../assets/GO参数计算1.png" alt="">
            <img src="../assets/GO参数计算2.png" alt="">

        </el-tab-pane>
        <el-tab-pane label="U图" name="second">U图</el-tab-pane>
        <el-tab-pane label="Y图" name="third">Y图</el-tab-pane>
        <el-tab-pane label="K-S检验" name="fourth">K-S检验</el-tab-pane>
        <el-tab-pane label="参数设置" name="fifth">
            <el-row>
                <el-col :offset="6" :span="8">
                    <paramtable ></paramtable>
                </el-col>
            </el-row>

        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import paramtable from "../components/GO数据表单.vue";
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
        },
        components: {
            paramtable,
        }
    };
</script>