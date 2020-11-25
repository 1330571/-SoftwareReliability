<template>
    <div>
        <div style="margin: 20px;"></div>
        <el-form  label-position="left" label-width="80px" :model="JMpara" :rules="rules" ref="JMpara" class="demo-ruleForm">
            <el-form-item label="精度ex" prop="ex">
                <el-input v-model="JMpara.ex" ></el-input>
            </el-form-item>
            <el-form-item label="精度ey" prop="ey">
                <el-input v-model="JMpara.ey" ></el-input>
            </el-form-item>
<!--            提交按钮-->
            <el-button type="primary" @click="formsubmit('JMpara')">提交</el-button>
<!--           重置按钮 -->
            <el-button type="info" @click="resetform('JMpara')">重置</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                JMpara: {//这是表单填的数据,就两个
                    ex: '',//精度ex
                    ey: '',//精度ey
                },
                rules://表单校验
                    {
                        ex:[
                            {required:true,message:"请输入ex值",trigger:"blur"}//表示要输入东西，提示信息为message,trigger是触发器，blur表示失去焦点
                        ],
                        ey:[
                            {required:true,message:"请输入ey值",trigger:"blur"}//表示要输入东西，提示信息为message,trigger是触发器，blur表示失去焦点
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