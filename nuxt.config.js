export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    lang: 'ru',
    title: 'Пересвет',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'description', content: 'Пересвет, частное охранное предприятие, охрана организаций, охрана образовательных учреждений, охрана медицинских учреждений, охрана госучреждений, охрана объектов, охрана промышленных объектов, охрана объектов транспорта, охрана недвижимости, охрана коммерческих объектов, охрана частных объектов, личная охрана, охрана мероприятий, сопровождение грузов, Москва и Московская область, Люберцы, РФ.' },
      { hid: 'description', name: 'description', content: '"Пересвет" - частное охранное предприятие, обеспечивающее комплексную безопасность личности, предпринимательской деятельности, мероприятий, и всех, кто нуждается в охране на всей территории во всех субъектах Российской Федерации.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Lora&display=swap', media:'all', disabled:''},
      {rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap', media:'all', disabled:''},
    ]
  },
  server:{
    host: "0.0.0.0",
    port: 5000
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
