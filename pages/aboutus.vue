<template>
    <div class="container">
        <!-- <myheader></myheader> -->
        <div class="ourimage">
            <img style="width: 100%;height: 100%;overflow: hidden;" src="~/assets/img/Mygroup.jpg" alt="img">
        </div>
        <div class="introduce">
            <h1>Wonder小组
                <small> --追求真理</small>
            </h1>
            <p>
                Wonder小组成立于2016年九月份，由3个志同道合的年轻人组成。主要方向有web,机器学习，android等。
            </p>
            <p>
                Lstmx项目由Wonder小组开发，旨在利用神经网络的方法来对周期性问题进行预测。
            </p>
        </div>
        <div class="members">
            <el-row>
                <el-col :span="16" :offset="4" :xs="{span: 24, offset: 0}">
                    <el-row>
                        <el-col :span="8" :xs="{span: 20, offset: 2}">
                            <div class="member-card wow fadeInUp foo" data-wow-duration="0.4s" data-wow-delay="0.2s">
                                <el-card shadow="always">
                                    <img src="../assets/img/user_avatar 01.png" class="image">
                                    <div style="padding:10px">
                                        <span>
                                            <strong>后端Z</strong>
                                            <svg class="memicon" aria-hidden="true">
                                                <use xlink:href="#icon-JavaScript"></use>
                                            </svg>
                                        </span>
                                        <p>
                                            项目组长，负责后端，数据库和进度控制。
                                        </p>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="8" :xs="{span: 20, offset: 2}">
                            <div class="member-card wow fadeInUp foo" data-wow-duration="0.4s" data-wow-delay="0.6s">
                                <el-card shadow="always">
                                    <img src="../assets/img/test.jpg" class="image">
                                    <div style="padding:10px">
                                        <span>
                                            <strong>算法X</strong>
                                            <svg class="memicon" aria-hidden="true">
                                                <use xlink:href="#icon-python"></use>
                                            </svg>
                                        </span>
                                        <p>
                                            负责数据处理，Lstm算法，神经网络搭建。
                                        </p>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="8" :xs="{span: 20, offset: 2}">
                            <div class="member-card wow fadeInUp foo" data-wow-duration="0.4s" data-wow-delay="1.0s">
                                <el-card shadow="always">
                                    <img src="../assets/img/waterdrop.jpg" class="image">
                                    <div style="padding:10px">
                                        <span>
                                            <strong>前端C</strong>
                                            <svg class="memicon" aria-hidden="true">
                                                <use xlink:href="#icon-nodejs"></use>
                                            </svg>
                                        </span>
                                        <p>前端，技术选型，运维。ps:本页面由C编写~</p>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
    .introduce {
        text-align: center;
    }

    .ourimage {
        margin: 0 15%;
    }

    .image {
        width: 100%;
        display: block;
    }

    .member-card {
        margin: 1em;
    }

    .introduce {
        margin: 8em 2em;
    }
    .memicon{
        width: 2em;
        height: 2em;
        fill: currentColor;
        vertical-align: -0.6em;
    }
    small {
        color: slategrey;
    }

    @media (max-width: 768px) {
        .introduce {
            margin: 4em 2em;
        }
        .ourimage {
            margin: 0 5%;
        }
    }
</style>
<script>
    import animate from 'animate.css';
    if (process.browser) {
        //require('scrollreveal');
        //使用ScrollReveal库
        // window.sr = ScrollReveal(scrollsetting);
        // sr.reveal('.foo', 200);
        // console.log("hello chrome1");
        var wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,       // default true
                      live:         true,        // default
                    }
        )
        wow.init();
    }
    export default {
        mounted: function () {
            this.$nextTick(function () {
                let scrollsetting = {
                    origin: 'bottom',
                    distance: '10em',
                    duration: 500,
                    delay: 50,
                    reset: true,
                }
                // Code that will run only after the
                // entire view has been rendered
                //此函数下代码会在游览器端vue渲染组件完成后运行,适合用来初始化
                //不会在node端运行:)
                //console.log("hello chrome");

                // new WOW().init();
                
            })
        }
    }
</script>