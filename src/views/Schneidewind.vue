<template>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane name="first">
            <span slot="label" ><i class="el-icon-document-copy" ></i> 算法简介 </span>
            <img src="../assets/Schneidewind模型参数计算.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="U图" name="SCHUchart" @click="datachange('SCHUchart')">
            <UEchart  ref="SCHUchart" :xdata="u_xdata" :ydata="u_ydata"></UEchart>
        </el-tab-pane>
        <el-tab-pane label="Y图" name="SCHYchart">
            <UEchart  ref="SCHYchart" :xdata="y_xdata" :ydata="y_ydata"></UEchart>
        </el-tab-pane>
        <el-tab-pane label="模型评估结果" name="modelshowchart">
            <modelshow ref="modelshowchart" :xtimedata="time_data" :fydata="f_data" :Fydata="F_data" :Rydata="R_data" :MTTFydata="MTTF_data"></modelshow>
        </el-tab-pane>
        <el-tab-pane label="参数设置" name="fifth">
            <el-row>
                <el-col :offset="6" :span="8">
                    <!--                    这里是一个组件getSCHdata据表单，通过表单来获取zeta-->
                    <paramtable ref="SCHcpt" @showSCHdata="getSCHdata"></paramtable>
                </el-col>
            </el-row>

        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import paramtable from "../components/Schneidewind数据表单";
    import UEchart from "../components/UEchart.vue";
    import modelshow from "../components/modelshow";
    export default {

        data() {
            return {
                activeName: 'first',
                SCHpara:{
                    name:String,
                    ux:Number,
                    uy:Number,
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
                if(tab.name=='SCHUchart'||tab.name=='modelshowchart'||tab.name=='SCHYchart')
                {
                    this.datachange(tab.name);
                }
            },
            getSCHdata(SCHpara)
            {
                var rthis=this;
                var SCH=this.$refs.SCHcpt._data.SCHpara;//获取到SCH表单中data的数据
                console.log(SCH);
                this.SCHpara=SCH;//赋值
                axios.get("http://localhost:8181/SCH/"+SCH.name+"/"+SCH.ux+"/"+SCH.uy)
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