<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
                <el-submenu index="1" >
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item index="1-1" @click="logrouter">选项1</el-menu-item>
                    <el-menu-item v-for="(it,idx) in this.$router.options.routes[0].children" :key="idx" @click="topath(it.path)">
                        {{it.name}}</el-menu-item>
                </el-submenu>

            </el-menu>
        </el-aside>

        <el-container>
<!--            <el-header style="text-align: right; font-size: 12px">-->
<!--                <el-dropdown>-->
<!--                    <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--                    <el-dropdown-menu slot="dropdown">-->
<!--                        <el-dropdown-item>查看</el-dropdown-item>-->
<!--                        <el-dropdown-item>新增</el-dropdown-item>-->
<!--                        <el-dropdown-item>删除</el-dropdown-item>-->
<!--                    </el-dropdown-menu>-->
<!--                </el-dropdown>-->
<!--                <span>王小虎</span>-->
<!--            </el-header>-->

            <el-main>
<!--                <el-table :data="tableData">-->
<!--                    <el-table-column prop="date" label="日期" width="140">-->
<!--                    </el-table-column>-->
<!--                    <el-table-column prop="name" label="姓名" width="120">-->
<!--                    </el-table-column>-->
<!--                    <el-table-column prop="address" label="地址">-->
<!--                    </el-table-column>-->
<!--                </el-table>-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        methods:{
            logrouter()
            {
                console.log(this.$router);
            },
            topath(path)
            {
              this.$router.push(path);
            },
        },
        data() {
            return {

            }
        }
    };
</script>