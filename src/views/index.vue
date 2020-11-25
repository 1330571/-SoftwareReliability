<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu v-for="(item1,idx1) in this.$router.options.routes" :key="idx1" :index="idx1+''">
                    <template slot="title"><i class="el-icon-message"></i>{{item1.name}}</template>
                    <el-menu-item v-for="(it,idx) in item1.children" :key="idx" @click="topath(it.path)" :index="it.path">
                        {{it.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-main>
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
            topath(path)
            {
                if(path!=this.$route.path)//不等于才跳，不然老是警告
                    this.$router.push(path);
                //console.log(this.$route);//打印route
               // console.log(this.$router);//打印router
            },
        },
        data() {
            return {

            }
        }
    };
</script>