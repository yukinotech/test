<template>
    <div class="turepage">
        <my-header/>
        <nuxt/>
        <my-footer/>
    </div>
</template>

<script>
    import MyFooter from '~/components/Footer.vue'
    import MyHeader from '~/components/Header.vue'
    export default {
        components: {
            MyFooter,
            MyHeader,
        },
        data:{

        }
    }
</script>

<style>
    .turepage{
        height: 100%;
    }
    .button,
    .button:visited {
        display: inline-block;
        color: black;
        letter-spacing: 1px;
        background-color: #fff;
        border: 2px solid #000;
        text-decoration: none;
        text-transform: uppercase;
        padding: 15px 45px;
    }

    .button:hover,
    .button:focus {
        color: #fff;
        background-color: #000;
    }

    .title {
        color: #000;
        font-weight: 300;
        font-size: 2.5em;
        margin: 0;
    }

    /*一下为自定义内容*/

    body {
        margin: 0px;
        font-family: "Microsoft YaHei", Arial, "Helvetica Neue", Helvetica, sans-serif;
    }

    a {
        text-decoration: none;
        color: #888;
    }
    a:hover{
        color: #409EFF;
    }
    .container {
        margin: 0;
        width: 100%;
        padding-bottom: 6em;
        text-align: center;
    }
    /* 觉得element-ui的分页字体太小了，改了改 */
    .el-pager li {
    font-size: 14.5px;
    }
</style>