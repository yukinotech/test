<template>
    <div>
        <article class="hentry">
            <h1 id="page-title" class="asset-name entry-title">神经网络入门</h1>
            <div class="asset-content entry-content" id="main-content">
                <!-- div class="asset-body" -->
                <p>眼下最热门的技术，绝对是人工智能。</p>
                <!-- /div -->
                <!-- div id="more" class="asset-more" -->
                <p>人工智能的底层模型是<a href="http://baike.baidu.com/item/%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C"
                        target="_blank">"神经网络"</a>（neural
                    network）。许多复杂的应用（比如模式识别、自动控制）和高级模型（比如深度学习）都基于它。学习人工智能，一定是从它开始。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071201.jpg" alt="" title=""></p>

                <p>什么是神经网络呢？网上似乎<a href="https://www.zhihu.com/question/22553761" target="_blank">缺乏</a>通俗的解释。</p>

                <p>前两天，我读到 Michael Nielsen 的开源教材<a href="http://neuralnetworksanddeeplearning.com/index.html" target="_blank">《神经网络与深度学习》</a>（Neural
                    Networks and Deep Learning），意外发现里面的解释非常好懂。下面，我就按照这本书，介绍什么是神经网络。</p>

                <p>这里我要感谢<a href="http://cn.udacity.com/?utm_source=ruanyfarticle&amp;utm_medium=referral&amp;utm_campaign=FEND05"
                        target="_blank">优达学城</a>的赞助，本文<a href="#support">结尾</a>有他们的<a href="http://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-advanced/?utm_source=ruanyfarticle&amp;utm_medium=referral&amp;utm_campaign=FEND05"
                        target="_blank">《前端开发（进阶）》</a>课程的消息，欢迎关注。</p>

                <h2>一、感知器</h2>

                <p>历史上，科学家一直希望模拟人的大脑，造出可以思考的机器。人为什么能够思考？科学家发现，原因在于人体的神经网络。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071212.png" alt="" title=""></p>

                <blockquote>
                    <ol start="1">
                        <li>外部刺激通过神经末梢，转化为电信号，转导到神经细胞（又叫神经元）。</li>
                        <li>无数神经元构成神经中枢。</li>
                        <li>神经中枢综合各种信号，做出判断。</li>
                        <li>人体根据神经中枢的指令，对外部刺激做出反应。</li>
                    </ol>
                </blockquote>

                <p>既然思考的基础是神经元，如果能够"人造神经元"（artificial neuron），就能组成人工神经网络，模拟思考。上个世纪六十年代，提出了最早的"人造神经元"模型，叫做<a href="https://zh.wikipedia.org/wiki/%E6%84%9F%E7%9F%A5%E5%99%A8"
                        target="_blank">"感知器"</a>（perceptron），直到今天还在用。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071202.png" alt="" title=""></p>

                <p>上图的圆圈就代表一个感知器。它接受多个输入（x1，x2，x3...），产生一个输出（output），好比神经末梢感受各种外部环境的变化，最后产生电信号。</p>

                <p>为了简化模型，我们约定每种输入只有两种可能：1 或 0。如果所有输入都是1，表示各种条件都成立，输出就是1；如果所有输入都是0，表示条件都不成立，输出就是0。</p>

                <h2>二、感知器的例子</h2>

                <p>下面来看一个例子。城里正在举办一年一度的游戏动漫展览，小明拿不定主意，周末要不要去参观。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071213.jpg" alt="" title=""></p>

                <p>他决定考虑三个因素。</p>

                <blockquote>
                    <ol start="1">
                        <li>天气：周末是否晴天？</li>
                        <li>同伴：能否找到人一起去？</li>
                        <li>价格：门票是否可承受？</li>
                    </ol>
                </blockquote>

                <p>这就构成一个感知器。上面三个因素就是外部输入，最后的决定就是感知器的输出。如果三个因素都是 Yes（使用<code>1</code>表示），输出就是1（去参观）；如果都是 No（使用<code>0</code>表示），输出就是0（不去参观）。</p>

                <h2>三、权重和阈值</h2>

                <p>看到这里，你肯定会问：如果某些因素成立，另一些因素不成立，输出是什么？比如，周末是好天气，门票也不贵，但是小明找不到同伴，他还要不要去参观呢？</p>

                <p>现实中，各种因素很少具有同等重要性：某些因素是决定性因素，另一些因素是次要因素。因此，可以给这些因素指定权重（weight），代表它们不同的重要性。</p>

                <blockquote>
                    <ul>
                        <li>天气：权重为8</li>
                        <li>同伴：权重为4</li>
                        <li>价格：权重为4</li>
                    </ul>
                </blockquote>

                <p>上面的权重表示，天气是决定性因素，同伴和价格都是次要因素。</p>

                <p>如果三个因素都为1，它们乘以权重的总和就是 8 + 4 + 4 = 16。如果天气和价格因素为1，同伴因素为0，总和就变为 8 + 0 + 4 = 12。</p>

                <p>这时，还需要指定一个阈值（threshold）。如果总和大于阈值，感知器输出1，否则输出0。假定阈值为8，那么 12 &gt;
                    8，小明决定去参观。阈值的高低代表了意愿的强烈，阈值越低就表示越想去，越高就越不想去。</p>

                <p>上面的决策过程，使用数学表达如下。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071203.png" alt="" title=""></p>

                <p>上面公式中，<code>x</code>表示各种外部因素，<code>w</code>表示对应的权重。</p>

                <h2>四、决策模型</h2>

                <p>单个的感知器构成了一个简单的决策模型，已经可以拿来用了。真实世界中，实际的决策模型则要复杂得多，是由多个感知器组成的多层网络。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071205.png" alt="" title=""></p>

                <p>上图中，底层感知器接收外部输入，做出判断以后，再发出信号，作为上层感知器的输入，直至得到最后的结果。（注意：感知器的输出依然只有一个，但是可以发送给多个目标。）</p>

                <p>这张图里，信号都是单向的，即下层感知器的输出总是上层感知器的输入。现实中，有可能发生循环传递，即 A 传给 B，B 传给 C，C 又传给 A，这称为<a href="https://zh.wikipedia.org/wiki/%E9%80%92%E5%BD%92%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C"
                        target="_blank">"递归神经网络"</a>（recurrent neural network），本文不涉及。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071211.png" alt="" title=""></p>

                <h2>五、矢量化</h2>

                <p>为了方便后面的讨论，需要对上面的模型进行一些数学处理。</p>

                <blockquote>
                    <ul>
                        <li>外部因素 <code>x1</code>、<code>x2</code>、<code>x3</code> 写成矢量 <code>&lt;x1, x2, x3&gt;</code>，简写为
                            <code>x</code></li>
                        <li>权重 <code>w1</code>、<code>w2</code>、<code>w3</code> 也写成矢量 <code>(w1, w2, w3)</code>，简写为
                            <code>w</code></li>
                        <li>定义运算 <code>w⋅x = ∑ wx</code>，即 <code>w</code> 和 <code>x</code> 的点运算，等于因素与权重的乘积之和</li>
                        <li>定义 <code>b</code> 等于负的阈值 <code>b = -threshold</code></li>
                    </ul>
                </blockquote>

                <p>感知器模型就变成了下面这样。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071206.png" alt="" title=""></p>

                <h2>六、神经网络的运作过程</h2>

                <p>一个神经网络的搭建，需要满足三个条件。</p>

                <blockquote>
                    <ul>
                        <li>输入和输出</li>
                        <li>权重（<code>w</code>）和阈值（<code>b</code>）</li>
                        <li>多层感知器的结构</li>
                    </ul>
                </blockquote>

                <p>也就是说，需要事先画出上面出现的那张图。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071205.png" alt="" title=""></p>

                <p>其中，最困难的部分就是确定权重（<code>w</code>）和阈值（<code>b</code>）。目前为止，这两个值都是主观给出的，但现实中很难估计它们的值，必需有一种方法，可以找出答案。</p>

                <p>这种方法就是试错法。其他参数都不变，<code>w</code>（或<code>b</code>）的微小变动，记作<code>Δw</code>（或<code>Δb</code>），然后观察输出有什么变化。不断重复这个过程，直至得到对应最精确输出的那组<code>w</code>和<code>b</code>，就是我们要的值。这个过程称为模型的训练。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071207.png" alt="" title=""></p>

                <p>因此，神经网络的运作过程如下。</p>

                <blockquote>
                    <ol start="1">
                        <li>确定输入和输出</li>
                        <li>找到一种或多种算法，可以从输入得到输出</li>
                        <li>找到一组已知答案的数据集，用来训练模型，估算<code>w</code>和<code>b</code></li>
                        <li>一旦新的数据产生，输入模型，就可以得到结果，同时对<code>w</code>和<code>b</code>进行校正</li>
                    </ol>
                </blockquote>

                <p>可以看到，整个过程需要海量计算。所以，神经网络直到最近这几年才有实用价值，而且一般的 CPU 还不行，要使用专门为机器学习定制的 GPU 来计算。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071214.jpg" alt="" title=""></p>

                <h2>七、神经网络的例子</h2>

                <p>下面通过车牌自动识别的例子，来解释神经网络。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071215.jpg" alt="" title=""></p>

                <p>所谓"车牌自动识别"，就是高速公路的探头拍下车牌照片，计算机识别出照片里的数字。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071216.jpg" alt="" title=""></p>

                <p>这个例子里面，车牌照片就是输入，车牌号码就是输出，照片的清晰度可以设置权重（<code>w</code>）。然后，找到一种或多种<a href="http://www.ruanyifeng.com/blog/2011/07/principle_of_similar_image_search.html"
                        target="_blank">图像比对算法</a>，作为感知器。算法的得到结果是一个概率，比如75%的概率可以确定是数字<code>1</code>。这就需要设置一个阈值（<code>b</code>）（比如85%的可信度），低于这个门槛结果就无效。</p>

                <p>一组已经识别好的车牌照片，作为训练集数据，输入模型。不断调整各种参数，直至找到正确率最高的参数组合。以后拿到新照片，就可以直接给出结果了。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071217.png" alt="" title=""></p>

                <h2>八、输出的连续性</h2>

                <p>上面的模型有一个问题没有解决，按照假设，输出只有两种结果：0和1。但是，模型要求<code>w</code>或<code>b</code>的微小变化，会引发输出的变化。如果只输出<code>0</code>和<code>1</code>，未免也太不敏感了，无法保证训练的正确性，因此必须将"输出"改造成一个连续性函数。</p>

                <p>这就需要进行一点简单的数学改造。</p>

                <p>首先，将感知器的计算结果<code>wx + b</code>记为<code>z</code>。</p>

                <blockquote>
                    <pre class=" language-javascript"><code class=" language-javascript">
z <span class="token operator">=</span> wx <span class="token operator">+</span> b
</code></pre>
                </blockquote>

                <p>然后，计算下面的式子，将结果记为<code>σ(z)</code>。</p>

                <blockquote>
                    <pre class=" language-javascript"><code class=" language-javascript">
σ<span class="token punctuation">(</span>z<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> e<span class="token operator">^</span><span class="token punctuation">(</span><span class="token operator">-</span>z<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
                </blockquote>

                <p>这是因为如果<code>z</code>趋向正无穷<code>z → +∞</code>（表示感知器强烈匹配），那么<code>σ(z) → 1</code>；如果<code>z</code>趋向负无穷<code>z
                        → -∞</code>（表示感知器强烈不匹配），那么<code>σ(z) → 0</code>。也就是说，只要使用<code>σ(z)</code>当作输出结果，那么输出就会变成一个连续性函数。</p>

                <p>原来的输出曲线是下面这样。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071208.png" alt="" title=""></p>

                <p>现在变成了这样。</p>

                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071209.png" alt="" title=""></p>

                <p>实际上，还可以证明<code>Δσ</code>满足下面的公式。</p>
                <p><img src="http://www.ruanyifeng.com/blogimg/asset/2017/bg2017071210.png" alt="" title=""></p>
                <p>即<code>Δσ</code>和<code>Δw</code>和<code>Δb</code>之间是线性关系，变化率是偏导数。这就有利于精确推算出<code>w</code>和<code>b</code>的值了。</p>
                <p>（正文完）</p>

            </div>
        </article>
    </div>
</template>
<script>
    export default {
        name: 'network'
    }
</script>
<style scoped>

</style>