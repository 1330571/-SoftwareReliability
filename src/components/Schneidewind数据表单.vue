<template>
    <div>
        <div style="margin: 20px;"></div>
        <el-form  label-position="left" label-width="80px" :model="Schpara" :rules="rules" ref="Schpara" class="demo-ruleForm">
            <el-form-item label="epsilonx" prop="epsilonx">
                <el-input v-model="Schpara.epsilonx" ></el-input>
            </el-form-item>
            <el-form-item label="epsilony" prop="epsilony">
                <el-input v-model="Schpara.epsilony" ></el-input>
            </el-form-item>
            <el-form-item label="xl" prop="xl">
                <el-input v-model="Schpara.xl" ></el-input>
            </el-form-item>
            <el-form-item label="xr" prop="xr">
                <el-input v-model="Schpara.xr" ></el-input>
            </el-form-item>
<!--            提交按钮-->
            <el-button type="primary" @click="formsubmit('Schpara')">提交</el-button>
<!--           重置按钮 -->
            <el-button type="info" @click="resetform('Schpara')">重置</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Schpara: {//这是表单填的数据,就两个
                    epsilonx: '',//误差x
                    epsilony: '',//误差y
                    xl:'',//xl
                    xr:''//xr
                },
                rules://表单校验
                    {
                        epsilonx:[
                            {required:true,message:"请输入epsilonx值",trigger:"blur"}//表示要输入东西，提示信息为message,trigger是触发器，blur表示失去焦点
                        ],
                        epsilony:[
                            {required:true,message:"请输入epsilony值",trigger:"blur"}//表示要输入东西，提示信息为message,trigger是触发器，blur表示失去焦点
                        ],
                        xl:[
                            {required:true,message:"请输入xl值",trigger:"blur"}//表示要输入东西，提示信息为message,trigger是触发器，blur表示失去焦点
                        ],
                        xr:[
                            {required:true,message:"请输入xr值",trigger:"blur"}//表示要输入东西，提示信息为message,trigger是触发器，blur表示失去焦点
                        ],
                    }
            };
        },
        methods: {
            formsubmit(formName)//提交校验，非空才能提交
            {
                this.$refs[formName].validate((valid) => {
                    if (valid) {//弹窗提示
                        this.$message({
                            message:"提交成功",
                            type:"success"
                        });
                        //这里有一个小步骤还没写，就是如果成功了，就自动跳转到u图，
                    } else {//如果有没填的
                        this.$message(
                            {
                                message:"提交失败",
                                type:"warning",
                            }
                        )

                    }
                });
            },
            resetform(formName)//重置
            {
                //console.log(this.$refs);
                this.$refs[formName].resetFields();//根据formName来清空内容
            },
        }
    }
</script>