<template>
    <div id="login">
        <div class="loginToHome">
            <el-form
                    ref="form"
                    :model="form"
                    :rules="ruleForm"
                    status-icon
                    label-width="80px"
                    class="loginForm"
            >
                <h3>软件可靠性测试系统</h3>

                <el-form-item
                        label="用户名"
                        prop="name"
                >
                    <el-input
                            type="text"
                            v-model="form.name"
                            auto-complete="off"
                            placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item
                        label="密码"
                        prop="password"
                >
                    <el-input
                            type="password"
                            v-model="form.password"
                            auto-complete="off"
                            placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                            class="homeBut"
                            type="primary"
                            plain
                            @click="submit"

                    >登录</el-button>
                    <el-button
                            class="loginBut"
                            type="primary"
                            plain
                            @click="resetForm()"
                    >重置</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: 'admin',
                    password: '123456'
                },
                ruleForm: {
                    name: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            submit(event) {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        var rthis=this;
                        axios.get("http://localhost:8181/user/finduser/"+this.form.name
                        +"/"+this.form.password).then(function(res)
                        {
                            if (res.data!="")//获取到了数据
                            {
                             //   console.log(res);
                                rthis.$message(
                                    {
                                        showClose: true,
                                        message:"登录成功",
                                        type:"success",
                                    }
                                )
                                rthis.$router.push( '/JM' );
                            } else {
                                rthis.$message(
                                    {
                                        showClose: true,
                                        message:"用户名或密码错误",
                                        type:"error",
                                    }
                                )
                            }
                        })

                    } else {
                        this.$message(
                            {
                                showClose: true,
                                message:"请填写用户名及密码",
                                type:"warning",
                            }
                        )
                    }
                })
            },
            resetForm() {
                this.$refs.form.resetFields();
            }

        }
    }
</script>
<style>
    .loginToHome {
        position: absolute;
        left: 0px;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 400px;
        height: 260px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background: #fff;
        border: 1px solid #dcdfe6;
    }
    .loginForm {
        text-align: center;
        padding-top: 15px;
        padding-right: 30px;
        top: 10px;
    }
    .homeBut {
        position: absolute;
        left: 0px;
    }
    .loginBut {
        position: absolute;
        right: 0px;
    }
</style>