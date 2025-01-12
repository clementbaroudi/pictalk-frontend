export default {
  ssr: false,
  target: 'static',
  /*
   ** Headers of the page
   */
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:3001"
  },
  generate: {
    fallback: true
  },
  head: {
    title: process.env.npm_package_name || "Pictalk",
    meta: [{
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      hid: "description",
      name: "description",
      content: process.env.npm_package_description || "Pictalk is a web app that aims to facilitate non-verbal poeople's communications"
    }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "favicon.ico?v2"
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#ff5757"
  },
  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.scss", "~assets/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/baseURL", "@/plugins/vuexpersistedstate.client.js"],
  /*
   ** Nuxt.js dev-modules 
   */
  buildModules: [
  ],
  /*
   ** Nuxt.js modules
   */
  responsiveLoader: {
    adapter: require('responsive-loader/sharp'),
    name: 'img/[name]-[width].[ext]',
    sizes: [240, 320, 640, 768, 960, 1024, 1280, 1600, 1920],
    placeholder: false, // no placeholder will be generated
    quality: 65, // images are compressed with medium quality
    format: 'webp',
  },
  sitemap: {
    hostname: 'https://www.pictalk.xyz',
    gzip: false,
    exclude: [
      '/changePassword',
      '/account',
      '/resetPassword/**'
    ],
  },
  i18n: {
    baseURL: 'https://www.pictalk.xyz',
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.js'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr-FR.js'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es-ES.js'
      },
      {
        code: 'it',
        iso: 'it-IT',
        name: 'Italiano',
        file: 'it-IT.js'
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.js'
      },
      {
        code: 'ro',
        iso: 'ro-RO',
        name: 'Român',
        file: 'ro-RO.js'
      },
      {
        code: 'pt',
        iso: 'pt-PT',
        name: 'Português',
        file: 'pt-PT.js'
      },
      {
        code: 'el',
        iso: 'el-EL',
        name: 'Eλληνικά',
        file: 'el-EL.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
  },
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ["nuxt-buefy", { materialDesignIcons: true, materialDesignIconsHRef: "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css" }],
    "@nuxtjs/pwa",
    "nuxt-clipboard2",
    'nuxt-responsive-loader',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
    [
      "nuxt-cookie-control",
      {
        barPosition: "bottom-right",
        colors: {
          barTextColor: "#fff",
          barBackground: "#448cce",
          barButtonColor: "#fff",
          barButtonBackground: "#ff5758",
          barButtonHoverColor: "#fff",
          barButtonHoverBackground: "#e85050",
          modalButtonBackground: "#ff5758",
          modalButtonHoverColor: "#fff",
          controlButtonBackground: "#ff5758",
          controlButtonHoverBackground: "#e85050",
          controlButtonIconHoverColor: "#fff",
          controlButtonIconColor: "#fff",
          modalButtonHoverBackground: "#e85050",
          checkboxActiveBackground: "#e85050",
          checkboxInactiveBackground: "#ede1e1",
          checkboxActiveCircleBackground: "#448cce",
          checkboxInactiveCircleBackground: "#f44336",
          checkboxDisabledBackground: "#ddd",
          checkboxDisabledCircleBackground: "#fff"
        }
      }
    ]
  ],
  pwa: {
    workbox: {

      //dev: true,
      /*
      config: {
        debug: true
      },*/
      cachingExtensions: '@/plugins/workboxConfig.js'
      /*
      runtimeCaching: [
        {
          urlPattern: (process.env.BASE_URL || "http://localhost:3001") + '/pictalk/image/.*',
          handler: 'CacheFirst',
          strategyOptions: {
            cacheName: 'pictos'
          }
        },
      ]
      */
    },
    manifest: {
      name: 'Pictalk',
      short_name: 'Pictalk',
      lang: 'en',
      description: 'Pictalk is an app which aims to make speech easier for non-verbal people',
      theme_color: '#ff5758',
      display: 'standalone',
      useWebmanifestExtension: 'true'
    },
  },
  /*
   ** Build configuration
   */
  build: {
    minimize: true,
    extend(config) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  },
  cookies: {
    necessary: [
      {
        name: {
          en: "Default cookies",
        },

        description: {
          en: "Used for cookie control."
        },
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      },
      {
        name: {
          en: "Authentification cookies"
        },
        description: {
          en: "Used to automatically sign you in. With these, you don't neeed to login every minute."
        },
        cookies: ["expirationDate", "jwt"]
      }
    ],
  },

};
