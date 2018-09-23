<template>
    <div class="main">

        <el-row>
            <!-- <el-col :span="4" :xs="{span:0, offset:0}">
                <div class="slide">
                    <el-menu class="slidebar" default-active="1" @select="handleSelect">
                        <el-menu-item index=1>
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </el-menu-item>
                        <el-menu-item index=2>
                            <i class="el-icon-star-on"></i>
                            <span>导航二</span>
                        </el-menu-item>
                        <el-menu-item index=3>
                            <i class="el-icon-tickets"></i>
                            <span>导航三</span>
                        </el-menu-item>
                        <el-menu-item index=4>
                            <i class="el-icon-news"></i>
                            <span>导航四</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col> -->
            <el-col :span="24" :xs="{span:24, offset:0}">
                <div class="mobiletool">
                    <!-- <div class="mobliemenu">
                        <el-tabs v-model="activeName" @tab-click="mobilehandleSelect">
                            <el-tab-pane name="first">
                                <span slot="label">
                                    <i class="el-icon-location"></i>
                                    导航一
                                </span>
                            </el-tab-pane>
                            <el-tab-pane name="second">
                                <span slot="label">
                                    <i class="el-icon-star-on"></i>
                                    导航二
                                </span>
                            </el-tab-pane>
                            <el-tab-pane name="third">
                                <span slot="label">
                                    <i class="el-icon-tickets"></i>
                                    导航三
                                </span>
                            </el-tab-pane>
                            <el-tab-pane name="fourth">
                                <span slot="label">
                                    <i class="el-icon-news"></i>
                                    导航四
                                </span>
                            </el-tab-pane>
                        </el-tabs>
                    </div> -->
                    <div class="search">
                        <el-autocomplete class="inputt" v-model="state" :fetch-suggestions="querySearchAsync"
                            prefix-icon="el-icon-search" placeholder="搜索" @select="searchhandleSelect">
                            <template slot-scope="{ item }">
                                <div class="name">{{ item }}</div>
                            </template>
                        </el-autocomplete>
                    </div>
                </div>
                <div class="display">
                    <el-row :gutter="10">
                        <el-col :span="12" :xs="{span: 24, offset: 0}">
                            <div class="charts">
                                <my-chart :message="{title:leftbar,page:nowpagenum,id:0}"></my-chart>
                            </div>
                        </el-col>
                        <el-col :span="12" :xs="{span: 24, offset: 0}">
                            <div class="charts">
                                <my-chart2 :message="{title:leftbar,page:nowpagenum,id:1}"></my-chart2>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="pages">
                    <div class="block">
                        <el-pagination :page-size="1" background layout="prev, pager, next, jumper" :total="pagenum"
                            @current-change="handleCurrentChange">
                        </el-pagination>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- <div>
            <full-chart v-on:showoff="showoff" :display="dialogVisible" :message="{title:leftbar,page:nowpagenum,id:1}"></full-chart>
        </div> -->
    </div>
</template>
<script>
    import MyChart from '.././components/Chart.vue'
    import FullChart from '.././components/FullScreenChart.vue'
    import axios from '~/plugins/axios'
    import MyChart2 from '.././components/Chart2.vue'
    export default {
        name: "show",
        created: function () {
            axios.get('/api/show/pagenum')
                .then((res) => {
                    this.pagenum = parseInt(res.data)
                })
                .catch(() => {
                    this.pagenum = ''
                })
        },
        data() {
            return {
                activeName: "first",
                isCollapse: false, //移动端侧边栏
                dialogVisible: false, //是否有弹窗
                state: "", //搜索栏内容
                leftbar: 1, //激活的侧边栏序号
                nowpagenum: 1, //激活的页面序号
                pagenum: 0, //总页面数
            }
        },
        methods: {
            changeCollapse() {
                this.isCollapse = !this.isCollapse
            },
            showoff() {
                this.dialogVisible = false
            },
            handleCurrentChange(nowpagenum) {
                this.nowpagenum = nowpagenum
            },
            mobilehandleSelect(tab) {
                this.leftbar = parseInt(tab.index) + 1
            },
            handleSelect(leftbar, leftbarpath) {
                this.leftbar = parseInt(leftbar)
            },
            searchhandleSelect(item) {
                this.state = item
                // this.dialogVisible = true
                axios.get("/api/getindex/"+item)
                    .then((res)=>{
                         this.nowpagenum = res.data.res+1
                        // console.log(res.data);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            querySearchAsync(str, cb) {
                console.log(str);
                setTimeout(() => {
                    axios.get('/api/sug/' + str)
                        .then((res) => {
                            cb(res.data)
                            // console.log(res);
                        })
                        .catch((err) => {
                            cb(['无结果'])
                            // console.log("error");
                        })
                }, 1000); //同样是为了加载效果
            }
        },
        components: {
            MyChart,
            MyChart2,
            FullChart
        },
    }
</script>


<style scoped>
    html,
    body {
        margin: 0;
        height: 100%;
    }

    .el-tabs__item is-top {
        width: 25%;
    }

    .bartitle {
        margin-left: 10px;
        padding: 10px 0 10px 0;
    }

    .mobliemenu {
        display: none;
    }

    .mobileside {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1000;
    }

    .mobileslidebar {
        height: 100%;
        width: 60%;
    }

    .display {
        padding: 0 10px 0 10px;
    }

    .search {
        position: relative;
        padding: 10px 0 0 30px;
        display: inline-table;
        z-index: 100;
    }

    .loadmore {
        display: block;
        text-align: center;
    }

    .slidebar:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
        height: 600px;
    }

    .pages {
        text-align: center;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        .mobiletool {
            display: block
        }

        .mobliemenu {
            display: initial;
            color: #888;
        }

        .search {
            padding: 0;
            float: left;
            margin: 0 0 0 8%;
            display: inline-table;
        }
    }
</style>