<template>
    <div class="charts">
        <div class="chart">
            <!-- <div class="chart" @click="showdiago"> -->
            <!-- 此处必须用内连样式规定高度 -->
            <ve-line :data="chartData" :data-zoom="dataZoom" :colors="colors" :settings="chartSettings" element-loading-text="加载中..."
                v-loading="loading" height="350px" v-show="!loadfail">
            </ve-line>
            <el-button class="reload" v-on:click="reolad(message)" v-show="loadfail">重新加载</el-button>
        </div>
        <div class="comment">
            {{title}}
        </div>
        <!-- <full-chart v-on:showoff="showoff" :display="dialogVisible" :message="message"></full-chart> -->
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import FullChart from '.././components/FullScreenChart.vue'

    export default {
        props: ["message"],
        created: function () {
            this.reolad(this.message)
        },
        watch: {
            message: function () {
                axios.get('/api/show/', {
                        params: this.message
                    })
                    .then((res) => {
                        this.title= res.data[0].name
                            // this.chartData.rows = this.trans(res.data[0].detail)
                        this.chartData.rows = res.data[0].detail
                        // console.log('message.id:'+message.id);
                        this.chartData.columns = ['date','Relative_error']
                        this.loading = false
                        this.loadfail = false
                    })
                    .catch((err) => {
                        this.loadfail = true
                        this.loading = false
                    })
            }
        },
        methods: {
            showdiago() {
                console.log("chart diago", this.message.id);
                this.dialogVisible = true
            },
            showoff() {
                this.dialogVisible = false
            },
            reolad(message) {
                this.loading = true
                this.loadfail = false
                //要有加载效果。。。
                setTimeout(() => {
                    // console.log("object");
                    return axios.get('/api/show/', {
                            params: this.message
                        })
                        .then((res) => {
                            // console.log(this.trans(res.data[0].detail));
                            this.title= res.data[0].name
                            this.chartData.rows = res.data[0].detail
                            this.chartData.columns = ['date', 'Relative_error']
                            this.loading = false
                            this.loadfail = false
                        })
                        .catch((err) => {
                            this.loadfail = true
                            this.loading = false
                        })
                }, 3000)
            },
        },
        data: function () {
            this.dataZoom = [{
                type: 'slider',
                start: 98,
                end: 100
            }]
            this.colors=["#fa6e86",'#fa6e86']
            this.chartSettings = {
                
                yAxisType: ['normal', 'percent'],
                axisSite: {
                    right: ['Relative_error']
                },
                
                yAxisName: ['数值', '误差率']
            }
            return {
                title:"",
                dialogVisible: false,
                loading: true,
                loadfail: false,
                chartData: {
                    columns: [],
                    rows: []
                }
            }
        },
        // components: {
        //     FullChart
        // }
    }
</script>

<style scoped>
    .charts {
        text-align: center;
        margin: 10% 5% 10% 5%;
        padding-top: 30px;
        height: 400px;
        -webkit-border-radius: 5px;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: box-shadow .25s;
        box-shadow: 0 2px 5px #cac6c6
    }

    .comment {
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .reload {
        margin: 155px 0 155px 0;

    }
</style>