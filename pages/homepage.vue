<template>
    <div class="container">
        <div class="page1">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h1 style="color:#fff">基于lstm的预测方案</h1>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            
        </div>
        <div class="page2">
            <h1>专业全面的深度量化服务</h1>
            <el-row>
                <el-col :span="6" :offset="3">
                    <div class="card wow fadeInUp" data-wow-delay="0">
                        <div>
                            <svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-caisexianweijing"></use>
                            </svg>
                        </div>
                        <div>研究平台</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="card wow fadeInUp" data-wow-delay="0.5s">
                        <div>
                            <svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-shuju"></use>
                            </svg>
                        </div>
                        <div>历史数据</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="card wow fadeInUp" data-wow-delay="1.0s">
                        <div>
                            <svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-zhinengshuju"></use>
                            </svg>
                        </div>
                        <div>机器学习</div>
                    </div>
                </el-col>
            </el-row>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>

            <el-row>
                <el-col :span="6" :offset="3">
                    <div class="card wow fadeInUp" data-wow-delay="0s">
                        <div>
                            <svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-yunduanbeifen"></use>
                            </svg>
                        </div>
                        <div>云端平台</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="card wow fadeInUp" data-wow-delay="0.5s">
                        <div>
                            <svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-caisetianwenwangyuanjing"></use>
                            </svg>
                        </div>
                        <div>回测引擎</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="card wow fadeInUp" data-wow-delay="1.0s">
                        <div>
                            <svg class="disicon" aria-hidden="true">
                                <use xlink:href="#icon-caisehuaxue"></use>
                            </svg>
                        </div>
                        <div>分析系统</div>                        
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="page3">
            <div class="learnmore">
                <a href='learnmore'>对lstm感兴趣？了解更多
                    <svg class="jumpicon" aria-hidden="true">
                        <use xlink:href="#icon-arrowright"></use>
                    </svg>
                </a>
            </div>
        </div>
        <div class="wow fadeInUp">
            <p>43234554333435654356</p>
            <h4>Activate in minutes, online 24x7</h4>
        </div>
    </div>
</template>
<style scoped>
    .page1 {
        background-image: url('~/assets/img/tech.jpg')
    }

    .page3 {
        padding-top: 50px;
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

    h1 {
        text-align: center;
    }
    h1, h2, h3, h4, h5, h6{
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
    if (process.browser) {
        //require('');
        // console.log("hello chrome1");
        var wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       250,          // default 元素在离页面底多远的地方才有动画
                      mobile:       false,       // default true
                      live:         true,        // default
                    }
        )
        wow.init();
    }

    export default {
        name:"homepage",
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
                //此函数下代码会在游览器端vue渲染组件完成后运行,适合用来初始化
                //不会在node端运行:)
                // console.log("hello chrome");
            })
        }
    }
</script>