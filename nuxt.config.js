module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }],
        script: [{ /*wowjs 只能在游览器上加载（否则“window is not defined”），所以不如通过cdn引入*/
                src: 'https://cdn.bootcss.com/wow/1.1.2/wow.min.js'
            },
            //决定用wowjs,所以就注释这个了(->_->)
            // {src:'https://cdn.bootcss.com/scrollReveal.js/3.4.0/scrollreveal.js'}
            { /**/
                src: 'https://cdn.bootcss.com/particles.js/2.0.0/particles.min.js'
            },
        ]
    },
    /*
     ** Global CSS
     */
    css: [{
        src: 'element-ui/lib/theme-chalk/index.css'
    }, {
        src: '~/assets/css/font-awesome-4.7.0/css/font-awesome.css'
    }],
    //element-ui里还含有v-charts
    plugins: [{
        src: '@/plugins/element-ui',
        ssr: true
    }],
    /*
     ** Add axios globally
     */
    /*
       Add axios globally，此处把常用js库放进去
       或者是只能在游览器端用的库，否则会‘window is not defined’。。。
       */
    build: {
        vendor: ['axios',
            'element-ui',
            /*这个是用来加载icon的 */
            '~/assets/js/iconfont.js'
        ],
        /*
         ** Run ESLINT on save
         */
        // extend (config, ctx) {
        //   if (ctx.dev && ctx.isClient) {
        //     config.module.rules.push({
        //       enforce: 'pre',
        //       test: /\.(js|vue)$/,
        //       loader: 'eslint-loader',
        //       exclude: /(node_modules)/
        //     })
        //   }
        // }
    },
    /*中间件*/
    // router: {
    //     middleware: 'stats',
    // },
    serverMiddleware: [
        // API middleware
        '~/api/index.js'
    ],

}