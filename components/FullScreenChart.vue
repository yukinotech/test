<template>
    <el-dialog :title="message" :visible.sync="display" width="90%" @close="showoff">
        <div class="charts">
            <div class="chart">
                <ve-line :data="chartData" element-loading-text="加载中..." :data-zoom="dataZoom" :toolbox="toolbox" v-loading="loading" height="400px"
                    v-show="!loadfail">
                </ve-line>
                <el-button class="reload" v-on:click="reolad(message)" v-show="loadfail">重新加载</el-button>
            </div>
        </div>
    </el-dialog>
</template>

<script>
    import axios from '~/plugins/axios'

    export default {
        props: {
            display: {
                required: true
            },
            message: {

            }
        },
        created: function () {
            axios.get('/api/show/', {
                    params: this.message
                })
                .then((res) => {
                    this.chartData.rows = res.data.rows
                    this.chartData.columns = res.data.columns
                    this.loading = false
                    this.loadfail = false
                })
                .catch((err) => {
                    this.loadfail = true
                    this.loading = false
                })
        },
        watch: {
            message: function () {
                axios.get('/api/show/', {
                        params: this.message
                    })
                    .then((res) => {
                        this.chartData.rows = res.data.rows
                        this.chartData.columns = res.data.columns
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
            showoff() {
                this.$emit("showoff")
            },
            reolad(message) {
                this.loading = true
                this.loadfail = false
                //要有加载效果。。。
                setTimeout(() => {
                    return axios.get('/api/show/', {
                            params: this.message
                        })
                        .then((res) => {
                            this.chartData.rows = res.data.rows
                            this.chartData.columns = res.data.columns
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
                    start: 0,
                    end: 100
                }],
                this.toolbox = {
                    feature: {
                        magicType: {
                            type: ['line', 'bar']
                        },
                        dataView: {
                            readOnly: false
                        },
                        restore: {},
                        saveAsImage: {},

                    }
                }
            return {
                show: false,
                loading: true,
                loadfail: false,
                chartData: {
                    columns: [],
                    rows: []
                }
            }
        }
    }
</script>

<style scoped>
    .charts {
        text-align: center;
        padding-top: 30px;
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