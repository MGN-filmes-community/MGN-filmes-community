// import colors from 'vuetify/es5/util/colors'

const routerBase = process.env.NODE_ENV === 'production' ? '/' : '/'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s MGN Filmes Community',
    title: '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Fundada em 1987 por Tino Navarro a MGN Filmes produziu ou co-produziu 42 longas metragens. Os filmes da MGN fizeram mais de 6 milhões de espectadores em salas cinema, dos quais 1.987.356 em Portugal, foram um enorme sucesso em home vídeo e em televisão e ganharam 76 Prémios, entre os quais 17 Globos de Ouro e 20 Prémios Sophia em Portugal, 6 Prémios Goya em Espanha, 3 Prémios do Cinema Brasileiro no Brasil.',
      },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-type', property: 'og:type', content: 'MGN Filmes Community' },
      {
        hid: 'og-image',
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/MGN-filmes-community/MGN-filmes-community.github.io/main/assets/images/mgn-logo.webp',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Fundada em 1987 por Tino Navarro a MGN Filmes produziu ou co-produziu 42 longas metragens. Os filmes da MGN fizeram mais de 6 milhões de espectadores em salas cinema, dos quais 1.987.356 em Portugal, foram um enorme sucesso em home vídeo e em televisão e ganharam 76 Prémios, entre os quais 17 Globos de Ouro e 20 Prémios Sophia em Portugal, 6 Prémios Goya em Espanha, 3 Prémios do Cinema Brasileiro no Brasil.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/v-player.js', '~/plugins/filters.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  router: {
    base: routerBase,
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      // themes: {
      //   dark: {
      //     primary: colors.blue.darken2,
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3,
      //   },
      // },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(mov)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false,
        },
      })
    },
  },
}
