<template>
    <header>
        <el-row>
            <el-col :span="20" :offset="2" :xs="{span:24, offset:0}">
                <el-row>
                  <el-col :span="2">
                      <div class="header-logo">
                    <a href="/">
                        <img class="logo-img" src="~assets/img/logo.png" alt="logo">
                    </a>
                </div>
                  </el-col>
                  <el-col :span="22">
                      <div style="display:block">
                    <ul class="nav">
                        <li class="nav-item">
                            <a href="/aboutus">关于我们</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.github.com">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-github"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/donate">捐赠</a>
                        </li>
                    </ul>
                </div>
                  </el-col>
                </el-row>
                
                
            </el-col>
        </el-row>
    </header>
</template>

<style scoped>
    header {
        /* padding: 10px; */
        height: 80px;
        background-color: #fff;
        color: #409EFF;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 80px;
        z-index: 100;
        position: relative;
        /* 隔壁前端工程师非要加一条分界线，当然我是不会加的。。 */
        /* border-bottom: 1px solid #ddd; */
    }

    .logo-img {
        height: 80px;
        display: block;
    }

    .header-logo {
        float: left;
        height: 80px;
    }

    .nav {
        float: right;
        line-height: 80px;
    }

    .nav-item {
        padding: 0 20px;
        margin: 0;
        float: left;
        list-style: none;
        position: relative;
        cursor: pointer;
    }

    /*导入 ant design icon 资源*/

    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    /* 为了避免bug */

    .el-col-offset-2 {
        margin-right: 8.33333%;
    }

    @media (max-width: 768px) {
        .nav-item {
            padding: 0 10px;
            margin: 0;
            float: left;
            list-style: none;
            position: relative;
            cursor: pointer;
        }
        .nav {
            padding: 0;
        }
    }
</style>