<template>
    <div>
        <div>
            <section class="col-article">
                <h1 class="col-article-title">详解 LSTM</h1>
                <div class="c-markdown J-articleContent">
                    <p>内容有：</p>
                    <ol class="ol-level-0">
                        <li>LSTM 思路</li>
                        <li>LSTM 的前向计算</li>
                        <li>LSTM 的反向传播</li>
                        <li>关于调参</li>
                    </ol>
                    
                    <h2>LSTM</h2>
                    <p><strong>长短时记忆网络(Long Short Term Memory Network, LSTM)</strong>，是一种改进之后的循环神经网络，可以解决RNN无法处理长距离的依赖的问题，目前比较流行。</p>
                    <h4>长短时记忆网络的思路：</h4>
                    <p>原始 RNN 的隐藏层只有一个状态，即h，它对于短期的输入非常敏感。
                        再增加一个状态，即c，让它来保存长期的状态，称为单元状态(cell state)。</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/cwkupyxdp8.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>把上图按照时间维度展开：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/beyouaif2u.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>在 t 时刻，LSTM 的输入有三个：当前时刻网络的输入值 <code>x_t</code>、上一时刻 LSTM 的输出值 <code>h_t-1</code>、以及上一时刻的单元状态
                        <code>c_t-1</code>；
                        LSTM 的输出有两个：当前时刻 LSTM 输出值 <code>h_t</code>、和当前时刻的单元状态 <code>c_t</code>.</p>
                    <h4>关键问题是：怎样控制长期状态 c ？</h4>
                    <p>方法是：使用三个控制开关</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/5ibl7pinom.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>第一个开关，负责控制继续保存长期状态c；
                        第二个开关，负责控制把即时状态输入到长期状态c；
                        第三个开关，负责控制是否把长期状态c作为当前的LSTM的输出。</p>
                    <h4>如何在算法中实现这三个开关？</h4>
                    <p>方法：用 门（gate）</p>
                    <p>定义：gate 实际上就是一层全连接层，输入是一个向量，输出是一个 0到1 之间的实数向量。
                        公式为：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/785w7a9q0u.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>回忆一下它的样子：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/2n1keianmq.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <h4>gate 如何进行控制？</h4>
                    <p>方法：用门的输出向量按元素乘以我们需要控制的那个向量
                        原理：门的输出是 0到1 之间的实数向量，
                        当门输出为 0 时，任何向量与之相乘都会得到 0 向量，这就相当于什么都不能通过；
                        输出为 1 时，任何向量与之相乘都不会有任何改变，这就相当于什么都可以通过。</p>
                    <figure>
                        
                    </figure>
                    <h2>LSTM 前向计算</h2>
                    <p>在 LSTM－1 中提到了，模型是通过使用三个控制开关来控制长期状态 c 的：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/5ibl7pinom.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>这些开关就是用门（gate）来实现：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/2n1keianmq.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>接下来具体看这三重门</p>
                    <figure>
                        
                    </figure>
                    <h3>LSTM 的前向计算:</h3>
                    <p>一共有 6 个公式</p>
                    <p><strong>遗忘门（forget gate）</strong>
                        它决定了上一时刻的单元状态 <code>c_t-1</code> 有多少保留到当前时刻 <code>c_t</code></p>
                    <p><strong>输入门（input gate）</strong>
                        它决定了当前时刻网络的输入 <code>x_t</code> 有多少保存到单元状态 <code>c_t</code></p>
                    <p><strong>输出门（output gate）</strong>
                        控制单元状态 <code>c_t</code> 有多少输出到 LSTM 的当前输出值 <code>h_t</code></p>
                    <figure>
                        
                    </figure>
                    <h4>遗忘门的计算为：</h4>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/igeoo01y9t.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>forget</p>
                    <p>遗忘门的计算公式中：
                        <code>W_f</code> 是遗忘门的权重矩阵，<code>[h_t-1, x_t]</code> 表示把两个向量连接成一个更长的向量，<code>b_f</code>
                        是遗忘门的偏置项，<code>σ</code> 是 sigmoid 函数。</p>
                    <figure>
                        
                    </figure>
                    <h4>输入门的计算：</h4>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/6zdat5g9k0.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>input</p>
                    <p>根据上一次的输出和本次输入来计算当前输入的单元状态：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/f4krygv482.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>当前输入的单元状态c_t</p>
                    <p>当前时刻的单元状态 <code>c_t</code> 的计算：由上一次的单元状态 <code>c_t-1</code> 按元素乘以遗忘门 <code>f_t</code>，再用当前输入的单元状态
                        <code>c_t</code> 按元素乘以输入门 <code>i_t</code>，再将两个积加和：
                        这样，就可以把当前的记忆 <code>c_t</code> 和长期的记忆 <code>c_t-1</code> 组合在一起，形成了新的单元状态 <code>c_t</code>。
                        由于遗忘门的控制，它可以保存很久很久之前的信息，由于输入门的控制，它又可以避免当前无关紧要的内容进入记忆。</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/4116eks2ge.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>当前时刻的单元状态c_t</p>
                    <figure>
                        
                    </figure>
                    <h4>输出门的计算：</h4>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/qnj1k52hzi.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>output</p>
                    <figure>
                        
                    </figure>
                    <h2>LSTM 的反向传播训练算法</h2>
                    <p>主要有三步：</p>
                    <p><strong>1. 前向计算每个神经元的输出值，一共有 5 个变量，计算方法就是前一部分：</strong></p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/o1u4s768v0.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p><strong>2. 反向计算每个神经元的误差项值。与 RNN 一样，LSTM 误差项的反向传播也是包括两个方向：</strong>
                        一个是沿时间的反向传播，即从当前 t 时刻开始，计算每个时刻的误差项；
                        一个是将误差项向上一层传播。</p>
                    <p><strong>3. 根据相应的误差项，计算每个权重的梯度。</strong></p>
                    <figure>
                        
                    </figure>
                    <p>gate 的激活函数定义为 sigmoid 函数，输出的激活函数为 tanh 函数，导数分别为：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/i2e6vb0uwa.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>具体推导公式为：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/odfxbuwti3.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/9wif96ofoc.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>具体推导公式为：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/nbfyw9ef30.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <figure>
                        
                    </figure>
                    <p><strong>目标是要学习 8 组参数，如下图所示：</strong></p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/ydj6m0v0ck.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>又权重矩阵 W 都是由两个矩阵拼接而成，这两部分在反向传播中使用不同的公式，因此在后续的推导中，权重矩阵也要被写为分开的两个矩阵。</p>
                    <p>接着就来求两个方向的误差，和一个梯度计算。
                        这个公式推导过程在本文的学习资料中有比较详细的介绍，大家可以去看原文：
                        <a href="https://link.jianshu.com/?t=https://zybuluo.com/hanbingtao/note/581764" target="_blank"
                            rel="nofollow">https://zybuluo.com/hanbingtao/note/581764</a></p>
                    <figure>
                        
                    </figure>
                    <h4>1. 误差项沿时间的反向传递：</h4>
                    <p>定义 t 时刻的误差项：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/e614gqp0w4.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>目的是要计算出 t-1 时刻的误差项：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/9704a61aju.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>利用 h_t c_t 的定义，和全导数公式，可以得到 将误差项向前传递到任意k时刻的公式：</p>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/fbgiv4pzyd.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <figure>
                        
                    </figure>
                    <h4>2. 将误差项传递到上一层的公式：</h4>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/8svjkd350h.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <figure>
                        
                    </figure>
                    <h4>3. 权重梯度的计算：</h4>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/vpn0zska3d.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>以上就是 LSTM 的训练算法的全部公式。</p>
                    <figure>
                        
                    </figure>
                    <h4>关于它的 Tuning 有下面几个建议：</h4>
                    <figure>
                        <div class="image-block"><span><img src="https://ask.qcloudimg.com/http-save/yehe-1000059/07552iq2jv.png?imageView2/2/w/1620"
                                    class="" style="cursor: zoom-in;"></span></div>
                    </figure>
                    <p>来自 LSTM Hyperparameter Tuning：
                        <a href="https://link.jianshu.com/?t=https://deeplearning4j.org/lstm" target="_blank" rel="nofollow">https://deeplearning4j.org/lstm</a></p>
                    <h4>还有一个用 LSTM 做 text_generation 的例子</h4>
                    <p><a href="https://link.jianshu.com/?t=https://github.com/fchollet/keras/blob/master/examples/lstm_text_generation.py"
                            target="_blank" rel="nofollow">https://github.com/fchollet/keras/blob/master/examples/lstm_text_generation.py</a></p>
                    <p>学习资料：
                        <a href="https://link.jianshu.com/?t=https://zybuluo.com/hanbingtao/note/581764" target="_blank"
                            rel="nofollow">https://zybuluo.com/hanbingtao/note/581764</a></p>
                    
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'lstm'
    }
</script>
<style scoped>
    .image-block{
        max-width: 600px;
    }
</style>