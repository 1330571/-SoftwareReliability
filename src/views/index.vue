<template>
    <el-container style="height: 900px; border: 1px solid #eee">
<!--        主界面的左边内容-->
        <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
<!--                以下的循环是根据index.js中routes数组的内容来动态展开的，item1表示routes的元素，it用来遍历item1的孩子数组-->
                <el-submenu v-for="(item1,idx1) in this.$router.options.routes" :key="idx1" :index="idx1+''" v-if="item1.isshow">
                    <template slot="title"><i class="el-icon-message"></i>{{item1.name}}</template>
                    <el-menu-item v-for="(it,idx) in item1.children" :key="idx" @click="topath(it.path)" :index="it.path" v-if="it.isshow">
                        {{it.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
<!--主界面右边的内容，变成router-view表示随着鼠标点击来替换-->
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
            topath(path)//响应点击事件，传入参数为要跳转的地址
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