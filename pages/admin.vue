<template>
    <div class="card">
        <h2 style="text-align:center">后台管理</h2>
        <el-form :model="form" label-width="80px">
            <el-form-item label="用户名:" class="item">
                <el-input v-model="form.nm" placeholder="请输入用户名..."></el-input>
            </el-form-item>
            <el-form-item label="密码:" class="item">
                <el-input type="password" v-model="form.pw" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="form.rememberme" class="remember">记住密码</el-checkbox>
                <el-button class="btn" type="primary" @click="login">
                    登录
                    <svg aria-hidden="true" class="icon">
                        <use xlink:href="#icon-login"></use>
                    </svg>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import axios from "~/plugins/axios"
    export default {
        name: "admin",
        layout: "error_tem",
        data() {
            return {
                form: {
                    nm: '',
                    pw: '',
                    rememberme:true
                }
            }
        },
        methods: {
            login() {
                let {
                    data
                } = axios.post("/api/admin/login", {
                        username: this.form.nm,
                        password: this.form.pw
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                console.log(JSON.stringify(this.form))
            }
        }
    }
</script>
<style scoped>
    .card {
        width: 350px;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        -webkit-border-radius: 5px;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: box-shadow .25s;
        box-shadow: 0 2px 5px #cac6c6
    }

    .card:hover {
        width: 350px;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        -webkit-border-radius: 5px;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: box-shadow .25s;
        box-shadow: 0 8px 17px #cac6c6
    }

    .card:hover {
        width: 350px;
    }

    .item {
        margin: 2em;
        text-align: left;
    }

    .remember {
        margin-left: 10px;
        margin-bottom: 20px;
        margin-right: 30px;
    }

    .btn {
        margin-left: 20px;
    }

    .icon {
        margin-left: 0.5em;
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        .el-form-item__label {
            display: none;
        }
    }
</style>