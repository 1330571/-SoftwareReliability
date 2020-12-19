<template>
    <div>
        <el-form style="width: 60%" :model="dataForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="样本名称" prop="name"  >
                <el-input v-model="dataForm.name" ></el-input>
            </el-form-item>
            <el-form-item label="数据" prop="datain"  >
                <el-input v-model="dataForm.datain" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dataForm: {
                    id:Number,
                    name: '',
                    datain:'',
                },
                rules: {
                    name: [
                        { required: true, message: '样本名称不能为空', trigger: 'blur' },
                    ],
                    datain: [
                        { required: true, message: '数据不能为空', trigger: 'blur' },
                    ],
                }
            };
        },
        created()
        {
            var f=this.$route.query;
           console.log(this.$route.query);
           this.dataForm.name=f.name;
           this.dataForm.id=f.id;
           this.dataForm.datain=f.data+'';
           console.log(this.dataForm);
        },
        methods: {
            submitForm(formName) {
                const t=this;
                axios.post("http://localhost:8181/data/save/"+this.dataForm.id+"/"+this.dataForm.name+"/"+this.dataForm.datain).then(
                    function(res)
                    {
                        console.log(res);
                        setTimeout(()=>//设置延时然后刷新界面
                        {
                            t.$router.push("/query");
                        },800)
                    }
                )
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>