<template>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane name="first">
            <span slot="label" ><i class="el-icon-document-copy" ></i> 算法简介 </span>
            <img src="../assets/GO参数计算1.png" alt="">
            <img src="../assets/GO参数计算2.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="U图" name="GOUchart" @click="datachange('GOUchart')">
            <UEchart  ref="GOUchart" :xdata="u_xdata" :ydata="u_ydata"></UEchart>
        </el-tab-pane>
        <el-tab-pane label="Y图" name="GOYchart">
            <UEchart  ref="GOYchart" :xdata="y_xdata" :ydata="y_ydata"></UEchart>
        </el-tab-pane>
        <el-tab-pane label="模型评估结果" name="modelshowchart">
            <modelshow ref="modelshowchart" :xtimedata="time_data" :fydata="f_data" :Fydata="F_data" :Rydata="R_data" :MTTFydata="MTTF_data"></modelshow>
        </el-tab-pane>
        <el-tab-pane label="参数设置" name="fifth">
            <el-row>
                <el-col :offset="6" :span="8">
                    <!--                    这里是一个组件getGOdata据表单，通过表单来获取zeta-->
                    <paramtable ref="GOcpt" @showGOdata="getGOdata"></paramtable>
                </el-col>
            </el-row>

        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import paramtable from "../components/GO数据表单.vue";
    import UEchart from "../components/UEchart.vue";
    import modelshow from "../components/modelshow";
    export default {

        data() {
            return {
                activeName: 'first',
                GOpara:{
                    name:String,
                    zeta:Number,
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
                if(tab.name=='GOUchart'||tab.name=='modelshowchart'||tab.name=='GOYchart')
                {
                    this.datachange(tab.name);
                }
            },
            getGOdata(GOpara)
            {
                var rthis=this;
                var GO=this.$refs.GOcpt._data.GOpara;//获取到GO表单中data的数据
                console.log(GO);
                this.GOpara=GO;//赋值
                axios.get("http://localhost:8181/GO/"+GO.name+"/"+GO.zeta)
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