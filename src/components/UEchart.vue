<template>
    <div ref="myChart1" style="width:1200px;height:600px">
    </div>
</template>

<script>
    // 基于准备好的dom，初始化echarts实例
    import echarts from 'echarts'
    export default {
        props:{
            xdata:Array,
            ydata:Array,
        },
        data() {
          return {
          }
        },
        mounted ()
        {
            // 绘制图表
            this.showechart("myChart1",this.getuoption());
        },
        methods:
            {
                getuoption()
                {
                    var option = {
                        tooltip:{},
                        legend:{
                            data:["U","M"],
                        },
                        xAxis: {

                            type: 'value',
                            data:this.xdata,
                            boundaryGap: false,

                            name:"X",
                        },
                        yAxis: {
                            boundaryGap: false,
                            type: 'category',
                            name:"Y",

                        },
                        series: [
                            {
                                data: this.xdata,
                                type: 'line',
                                name:"U"
                            },
                            {
                            data: this.ydata,
                            type: 'line',
                            name:"M"
                            },

                        ],
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
                 this.showechart("myChart1", this.getuoption())
              },
                showechart(refs,option)
                {
                    var myChart = echarts.init(this.$refs[refs]);
                    myChart.setOption(option,true);
                }

            },

    }
</script>