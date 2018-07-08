<template>
    <div>
        <el-row>
            <el-col :span="20" :offset="2" :xs="{span:24, offset:0}">
                <div class="aside">
                    <ul>
                        <li>
                            <nuxt-link to="/learnmore/network">
                                神经网络
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/learnmore/cnn">
                                CNN网络
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/learnmore/rnn">
                                RNN网络
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/learnmore/lstm">
                                LSTM算法
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <nuxt-child/>
                    <el-button type="" @click="getUser">get?</el-button>
                    <p>{{users}}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import axios from "axios"

    export default {
        name:"learnmore",
        computed: {
            user() {
                return this.$store.state.counter
            },
        },
        methods: {
            getUser() {
                let {
                    data
                } = axios.get('/api/learnmore/getuser')
                console.log(data)
                return {
                    users: data
                }
            }
        }
    }
</script>
<style scoped>
    ul {
        text-align: right;
        padding: 3em 1em 0 0;
    }

    ul>li {
        margin-bottom: 0.5em;
        list-style-type: none;
        display: list-item;
        text-align: -webkit-match-parent;
        font-size: 1em;
    }

    .aside {
        display: inline-table;
    }

    a {
        color: #000;
    }

    a:hover {
        border-bottom: 2px solid #409EFF;
    }

    .nuxt-link-active {
        color: #409EFF;
    }

    .content {
        padding: 1em 5em 10em 5em;
        display: inline-table;
        /* 上 右 下 左*/
    }

    @media (max-width: 768px) {
        .aside {
            display: block;
        }
        ul {
            text-align: center;
            list-style: none;
            padding: 0;
        }
        ul>li {
            display: inline;

        }
    }
</style>