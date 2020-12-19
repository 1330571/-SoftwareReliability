<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div ref="myChart1" style="width:600px;height:400px">
                </div>
            </el-col>
            <el-col :span="12">
                <div ref="myChart2" style="width:600px;height:400px">
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div ref="myChart3" style="width:600px;height:400px">
                </div>
            </el-col>
            <el-col :span="12">
                <div ref="myChart4" style="width:600px;height:400px">
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<!--1-f概率密度
2-F分布函数
3-R函数
4-MTTF
-->
<script>
    // 基于准备好的dom，初始化echarts实例
    import echarts from 'echarts'
    export default {
        props:{
            xtimedata:Array,
            fydata:Array,
            Fydata:Array,
            Rydata:Array,
            MTTFydata:Array,
        },
        data() {
            return {
                myxaxis:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        },
        mounted ()
        {
            // 绘制图表
            this.Changechart();
        },
        methods:
            {
                getfoption()
                {
                    var option = {
                        title: {
                            text: '概率密度函数'
                        },
                        tooltip:{},
                        legend:{
                            data:["f"],
                        },
                        xAxis: {
                            type: 'category',
                            data:this.xtimedata,
                            name:"X"
                        },
                        yAxis: {
                            type: 'value',
                            name:"Y"
                        },
                        series: [{
                            data: this.fydata,
                            type: 'line',
                            name:"f",
                            smooth:true,
                            areaStyle: {}
                        }],
                        toolbox: {
                            feature: {
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                    };
                    return option;
                },
                getFoption()
                {
                    var option = {
                        title: {
                            text: '概率分布函数'
                        },
                        tooltip:{},
                        legend:{
                            data:["F"],
                        },
                        xAxis: {
                            type: 'category',
                            data:this.xtimedata,
                            name:"X"
                        },
                        yAxis: {
                            type: 'value',
                            name:"Y"
                        },
                        series: [{
                            data: this.Fydata,
                            type: 'line',
                            name:"F",
                            smooth:true,
                            areaStyle: {}
                        }],
                        toolbox: {
                            feature: {
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                    };
                    return option;
                },
                getRoption()
                {
                    var option = {
                        title: {
                            text: '可靠性函数'
                        },
                        tooltip:{},
                        legend:{
                            data:["R"],
                        },
                        xAxis: {
                            type: 'category',
                            data:this.xtimedata,
                            name:"X"
                        },
                        yAxis: {
                            type: 'value',
                            name:"Y"
                        },
                        series: [{
                            data: this.Rydata,
                            type: 'line',
                            name:"R",
                            smooth:true,
                            areaStyle: {}
                        }],
                        toolbox: {
                            feature: {
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                    };
                    return option;
                },
                getMTTFoption()
                {
                    var option = {
                        title: {
                            text: 'MTTF'
                        },
                        tooltip:{},
                        legend:{
                            data:["MTTF"],
                        },
                        xAxis: {
                            type: 'category',
                            data:this.xtimedata,
                            name:"X"
                        },
                        yAxis: {
                            type: 'value',
                            name:"Y"
                        },
                        series: [{
                            data: this.fydata,
                            type: 'line',
                            name:"MTTF",
                        }],
                        toolbox: {
                            feature: {
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                    };
                    return option;
                },
                Changechart()//数据改变了就进行图表的修改
                {
                    // 配置图表选项
                    this.showechart("myChart1",this.getfoption());
                    this.showechart("myChart2",this.getFoption());
                    this.showechart("myChart3",this.getRoption());
                    this.showechart("myChart4",this.getMTTFoption());
                },
                showechart(refs,option)
                {
                    var myChart = echarts.init(this.$refs[refs]);
                    myChart.setOption(option,true);
                }

            },

    }
</script>