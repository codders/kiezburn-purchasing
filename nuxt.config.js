module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kiezburn-purchasing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Receipt Processing and Purchasing for KiezBurn' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  mode: 'spa',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true,
    analyze: {
      analyzerMode: 'static'
    },
    vendor: [ 'firebase', 'vuetify' ]
  },
  plugins: [
    {src: '~/plugins/vuetify.js'},
    '~/plugins/fireauth.js'
  ],
  modules: [
    '@nuxtjs/pwa',
    'nuxt-validate'
  ],
  router: {
    middleware: 'router-auth'
  },
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ]
}
