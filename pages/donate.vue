<template>
    <div>
        <el-row>
            <el-col :span="5" :xs="{span:24}">
                <h1>捐赠</h1>
            </el-col>
            <el-col :span="16" :xs="{span:24}">
                <div class="card">
                    <el-row>
                        <el-col :span="12" :xs="{span:24}">
                            <div class="zfb">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-zhifubao"></use>
                                </svg>
                            </div>
                        </el-col>
                        <el-col :span="12" :xs="{span:24}">
                            <div class="wx">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-weixinzhifu"></use>
                                </svg>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name:"donate"
    }
</script>
<style scoped>
    h1 {
        text-align: center;
    }

    .card {
        width: 90%;
        margin: 20px auto;
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
    .zfb{
        text-align: center;
    }
    .wx{
        text-align: center;
    }
    .icon{
        height: 100%;
        width: auto;
    }
    @media screen {
        .card{
            width: 80%;
            margin: 0 10% 0 10%;
            padding: 0 0 0 0;
        }
    }
</style>