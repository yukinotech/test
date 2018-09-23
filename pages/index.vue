<template>
    <div class="container">
        <div class="page1">
            <div id="canvas">
            <div id="particles-js"></div>
            </div>
            <h1 style="color:#fff" class="bigTitle">基于lstm的预测方案</h1>
            <a href="/show" class="bigButton">预测图表</a>
        </div>
        <div class="page2">
            <h1>我们工作的现状和展望</h1>
            <el-row>
                <el-col :span="6" :offset="3" :xs="{span:24,offset:0}">
                    <div class="card wow fadeInUp" data-wow-delay="0">
                        <div><svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-caisexianweijing"></use>
                            </svg></div>
                        <div>研究平台</div>
                        <div class="introduction">在服务端部署云平台，更加自动化。在单个数据运用lstm模型后，尝试纵向lstm数据预测，将弱关系的数据联系打通起来，使预测结果更加精准。逐渐形成自动化、集合化的数据预测平台。</div>
                    </div>
                </el-col>
                <el-col :span="6" :xs="{span:24,offset:0}">
                    <div class="card wow fadeInUp" data-wow-delay="0.5s">
                        <div><svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-shuju"></use>
                            </svg></div>
                        <div>历史数据</div>
                        <div class="introduction">在现有的近万条数据基础上，继续爬取相关饰品价格数据，充实数据库，为模型提供更多的学习样例，使预测更加精准，以便今后提供更加优质的服务。</div>
                    </div>
                </el-col>
                <el-col :span="6" :xs="{span:24,offset:0}">
                    <div class="card wow fadeInUp" data-wow-delay="1.0s">
                        <div><svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-zhinengshuju"></use>
                            </svg></div>
                        <div>机器学习</div>
                        <div class="introduction">深度学习是机器学习的重要分支，深度学习中lstm模型在预测长短周期数据有着较好的效果。如何在使用lstm模型的同时兼顾其他模型的优点，是我们接下来思考的课题。</div>
                    </div>
                </el-col>
            </el-row><br>
            <el-row>
                <el-col :span="6" :offset="3" :xs="{span:24,offset:0}">
                    <div class="card wow fadeInUp" data-wow-delay="0s">
                        <div><svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-yunduanbeifen"></use>
                            </svg></div>
                        <div>团队智慧</div>
                        <div class="introduction">我们是一支优秀的团队，团队中每个人的智慧成就了今天的项目。前端，后端，运维，机器学习，数据爬取，数据处理···每个环节都克服了各种困难，才有了今天的成果。</div>
                    </div>
                </el-col>
                <el-col :span="6" :xs="{span:24,offset:0}">
                    <div class="card wow fadeInUp" data-wow-delay="0.5s">
                        <div><svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-caisetianwenwangyuanjing"></use>
                            </svg></div>
                        <div>精准预测</div>
                        <div class="introduction">在标准条件下，我们团队的预测准确误差在10%以内，虽然和前沿还有着较大的差距，但我们有信心调整模型参数，追赶前沿的步伐。</div>
                    </div>
                </el-col>
                <el-col :span="6" :xs="{span:24,offset:0}">
                    <div class="card wow fadeInUp" data-wow-delay="1.0s">
                        <div><svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-caisehuaxue"></use>
                            </svg></div>
                        <div>展示系统</div>
                        <div class="introduction">页面采用my-chart框架进行展示页面，提供了丰富，实用图表的操作界面，并且预留出数据处理api，以供未来需求发展，为建立数据平台做准备。</div>
                    </div>
                </el-col>
                <div class="learnmore">
                    <a href='learnmore'>对lstm感兴趣？了解更多
                        <svg class="jumpicon" aria-hidden="true">
                            <use xlink:href="#icon-arrowright"></use>
                        </svg>
                    </a>
                </div>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
    .container{
        padding: 0;
    }
    .page1 {
        background-color: #031f35
    }

    .page2 {
        padding-top: 50px;
        background-color: #e0e9f1;
        padding-bottom: 8em;
    }

    #particles-js{
        margin-top: 0px;
        height: 550px;
        z-index: -1;
    }

    .bigButton{
    position: relative;
    background-color: transparent;
    display: inline-block;
    color: #ddd;
    font-size: 16px;
    width: 200px;
    line-height: 52px;
    border: 1px solid rgba(100,100,100,0.5);
    border-radius: 28px;
    margin-bottom: 200px;
    z-index: 100;
    }
    .bigButton:hover{
    position: relative;
    background-color: #fff;
    display: inline-block;
    color: #222;
    font-size: 16px;
    width: 200px;
    line-height: 52px;
    border: 1px solid rgba(100,100,100,0.5);
    border-radius: 28px;
    margin-bottom: 200px;
    transition: 0.5s;
    z-index: 100;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .learnmore {
        float: right;
        padding-right: 100px;
        display: block;
    }

    .disicon {
        width: 4em;
        height: 4em;
        fill: currentColor;
    }

    .jumpicon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.4em;
        fill: currentColor;
    }

    .introduction {
        margin: 0;
        padding: 35px;
    }

    h1.bigTitle {
        text-align: center;
        margin-bottom: 200px;
        font-size: 60px;
        margin-top: -450px;
        /* margin-bottom: 250px; */
    }

    h1 {
        text-align: center;
        margin-top: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: inherit;
    }

    @media (max-width: 768px) {
        .learnmore {
            float: right;
            padding-right: 2em;
            display: block;
        }
    }
</style>
<script>
    import animate from 'animate.css'
    import particles_css from '~/assets/css/particles.css'

    // if (process.BROWSER_BUILD) {
    //     require('~/assets/js/particles.js')
    //     require('~/assets/js/app.js')
    // }
    if (process.browser) {
        particlesJS('particles-js', {
                "particles": {
                    "number": {

                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    }

                    ,
                    "color": {
                        "value": "#3b485f"
                    }

                    ,
                    "shape": {

                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }

                        ,
                        "polygon": {
                            "nb_sides": 5
                        }

                        ,
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    }

                    ,
                    "opacity": {

                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    }

                    ,
                    "size": {

                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    }

                    ,
                    "line_linked": {
                        "enable": true,
                        "distance": 160,
                        "color": "#7488a4",
                        "opacity": 0.5,
                        "width": 1
                    }

                    ,
                    "move": {

                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                }

                ,
                "interactivity": {

                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        }

                        ,
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        }
                        ,
                        "resize": true
                    }

                    ,
                     "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 8,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
                }

                ,
                "retina_detect": true
            }

        );
    }

    ;

    if (process.browser) {

        //require('');
        // console.log("hello chrome1");
        var wow = new WOW({
                boxClass: 'wow', // default
                animateClass: 'animated', // default
                offset: 250, // default 元素在离页面底多远的地方才有动画
                mobile: false, // default true
                live: true, // default
            }

        ) 
        wow.init();
    }

    export default {

        name: "homepage",
        mounted: function () {
            this.$nextTick(function () {
                    // Code that will run only after the
                    // entire view has been rendered
                    //此函数下代码会在游览器端vue渲染组件完成后运行,适合用来初始化
                    //不会在node端运行:)
                    // console.log("hello chrome");
                }
            )
        }
    }
</script>