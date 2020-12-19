<template>
    <div>
        <div style="margin: 20px;"></div>
        <el-form  label-position="left" label-width="120px" :model="JMpara" :rules="rules" ref="form" class="demo-ruleForm">
            <el-form-item label="样本数据名称" prop="name">
                <el-input v-model="JMpara.name" ></el-input>
            </el-form-item>
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
                JMpara: {//这是表单填的数据,ex和ey以及选择的数据样本名称
                    name:'测试数据1',
                    ex: 0.1,//精度ex
                    ey: 0.1,//精度ey
                },
                rules://表单校验
                    {
                        name:[
                            {required:true,message:"请输入样本名称",trigger:"blur"}//表示要输入东西，提示信息为message,trigger是触发器，blur表示失去焦点
                        ],
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
                let rthis=this;
                //console.log("点击");
                this.$refs.form.validate((valid) => {
                    if (valid) {
                       // console.log(this.JMpara);
                        this.$emit('showJMdata');//转到父组件进行数据处理
                        this.$message(
                            {
                                showClose: true,
                                message:"提交成功",
                                type:"success",
                            }
                        )
                    } else {
                        this.$message(
                            {
                                showClose: true,
                                message:"请填写数据",
                                type:"warning",
                            }
                        )
                    }
                })
            },
            resetform(formName)//重置
            {
                //console.log(this.$refs);
                this.$refs[formName].resetFields();//根据formName来清空内容
            },
        }
    }
</script>