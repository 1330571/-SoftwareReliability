<template>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="失效数据:">
                    </el-form-item>
                    <el-form-item :label="props.row.data+''">
                    </el-form-item>
                    <el-form-item label="">
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column>
            <template slot="header" slot-scope="props">
                Number
            </template>
            <template slot-scope="props">
               <i class="el-icon-magic-stick"></i> {{props.$index+1}}
            </template>
        </el-table-column>
        <el-table-column
                label="Name"
                prop="name">
        </el-table-column>
        <el-table-column
                align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        id:0,
                        name:"测试数据0",
                        data:[1,2,3,4,5,6,7,0.2],
                    },
                    {
                        id:0,
                        name:"测试数1",
                        data:[333,2,3,4,5,6,7,0.2],
                    }
                ],
                search: ''
            }
        },
        created() {
            var rthis=this;
          axios.get("http://localhost:8181/data/query/all").then(
              function(res) {
                  console.log(res);
                 rthis.tableData=res.data;
              }
          )
        },
        methods: {

            handleEdit(index, row) {
                console.log(index,row);
                this.$router.push(
                    {
                        path:"/update",
                        query:row
                    }
                )

            },
            handleDelete(index, row) {
                console.log(index,row);
                var rthis=this;
                axios.post("http://localhost:8181/data/delete/"+row.name)//请求删除的api
                .then(res=>
                    {
                        rthis.$notify({
                            title: '成功',
                            message: '数据删除成功',
                            type: 'success'
                        });
                        setTimeout(()=>//设置延时然后刷新界面
                            {
                                window.location.reload();
                            },800)
                    }
                );
            }
        },
    }
</script>