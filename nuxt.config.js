export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: ' ЧОП "ООО Валенсия"',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons.png' },
      {
        rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap'
      },
      {
        rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap'
      },
      {
        rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Lobster&display=swap'
      },
      {
        rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'
      },
      {
        rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap'
      },
      {
        rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap'
      },
    ]
  },
  server:{
    host: "0.0.0.0",
    port: 3000
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
