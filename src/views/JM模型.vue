<template>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane name="first">
            <span slot="label" ><i class="el-icon-document-copy" ></i> 算法简介 </span>
            <img src="../assets/JM模型参数计算.png" alt="">
            <img src="../assets/JM模型参数计算2.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="U图" name="JMUchart" @click="datachange('JMUchart')">
            <UEchart  ref="JMUchart" :xdata="u_xdata" :ydata="u_ydata"></UEchart>
        </el-tab-pane>
        <el-tab-pane label="Y图" name="JMYchart">
            <UEchart  ref="JMYchart" :xdata="y_xdata" :ydata="y_ydata"></UEchart>
        </el-tab-pane>
        <el-tab-pane label="模型评估结果" name="modelshowchart">
            <modelshow ref="modelshowchart" :xtimedata="time_data" :fydata="f_data" :Fydata="F_data" :Rydata="R_data" :MTTFydata="MTTF_data"></modelshow>
        </el-tab-pane>
        <el-tab-pane label="参数设置" name="fifth">
            <el-row>
                <el-col :offset="6" :span="8">
<!--                    这里是一个组件JM数getJMdata据表单，通过表单来获取ex,ey-->
                    <paramtable ref="JMcpt" @showJMdata="getJMdata"></paramtable>
                </el-col>
            </el-row>

        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import paramtable from "../components/JM数据表单.vue";
    import UEchart from "../components/UEchart.vue";
    import modelshow from "../components/modelshow";
    export default {

        data() {
            return {
                activeName: 'first',
                JMpara:{
                    name:String,
                    ex:Number,
                    ey:Number,
                },
                u_xdata:[],
                u_ydata:[],
                time_data:[],
                f_data:[],
                F_data:[],
                R_data:[],
                MTTF_data:[],
                y_xdata:[],
                y_ydata:[],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
                if(tab.name=='JMUchart'||tab.name=='modelshowchart'||tab.name=='JMYchart')
                {
                    this.datachange(tab.name);
                }
            },
            getJMdata(JMpara)
            {
                var rthis=this;
                var JM=this.$refs.JMcpt._data.JMpara;//获取到JM表单中data的数据
               // console.log(JM);
                this.JMpara=JM;//赋值
                axios.get("http://localhost:8181/JM/"+JM.name+"/"+JM.ex+"/"+JM.ey)
                .then(function(res)
                    {
                        console.log(res);
                        rthis.time_data=res.data.timedata;
                        rthis.f_data=res.data.fun;
                        rthis.F_data=res.data.f;
                        rthis.R_data=res.data.r;
                        rthis.MTTF_data=res.data.mttf;
                        rthis.u_xdata=res.data.u_x;
                        rthis.u_ydata=res.data.u_y;
                        rthis.y_xdata=res.data.y_x;
                        rthis.y_ydata=res.data.y_y;
                        // rthis.uxdata=res.data[0];
                        // rthis.uydata=res.data[1];
                    });
            },
            datachange(ref)
            {
                console.log(ref+"点击")
                this.$refs[ref].Changechart();//修改图表
            }
        },
        components: {
            paramtable,
            UEchart,
            modelshow,
        }
    };
</script>