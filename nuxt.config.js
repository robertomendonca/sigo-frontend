export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sigo-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login:  { url: '/users/sign_in', method: 'post', propertyName: 'token' },
          logout: { url: '/users/sign_out', method: 'delete' },
          user:   { url: '/users/current', method: 'get', propertyName: 'data' },
          normas:   { url: '/normas', method: 'get', propertyName: 'data' },
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
},

  axios: {
    host: 'localhost',
    port: 8080,
    prefix: '/api'
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
