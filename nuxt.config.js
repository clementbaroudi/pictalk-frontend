export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:3001"
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
    //  "@nuxtjs/fontawesome"
  ],
  /*
   ** Nuxt.js modules
   */
  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    min: 240, // minimum image width generated
    max: 1080, // maximum image width generated
    steps: 4, // five sizes per image will be generated
    placeholder: false, // no placeholder will be generated
    quality: 1, // images are compressed with medium quality
    //format: 'png',
  },
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ["nuxt-buefy", { materialDesignIcons: true }],
    "@nuxtjs/pwa",
    "nuxt-clipboard2",
    'nuxt-responsive-loader',
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
          barButtonHoverBackground: "#2e495e",
          modalButtonBackground: "#ff5758",
          modalButtonHoverColor: "#fff",
          controlButtonBackground: "#ff5758",
          controlButtonHoverBackground: "#2e495e",
          controlButtonIconHoverColor: "#fff",
          controlButtonIconColor: "#fff",
          modalButtonHoverBackground: "#2e495e",
          checkboxActiveBackground: "#2e495e",
          checkboxInactiveBackground: "#ede1e1",
          checkboxActiveCircleBackground: "#448cce",
          checkboxInactiveCircleBackground: "#f44336",
          checkboxDisabledBackground: "#ddd",
          checkboxDisabledCircleBackground: "#fff"
        },
        text: {
          barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies and the cookie policy. You can find the cookie policy at: https://www.pictalk.xyz/legal-infos/cookie-policy',
        }
      }
    ]
  ],
  pwa: {
    manifest: {
      name: 'Pictalk',
      short_name: 'Pictalk',
      lang: 'en',
      short_name: 'Pictalk',
      description: 'Pictalk is an app which aims to make speech easier for non-verbal people',
      theme_color: '#ff5758',
      display: 'standalone',
      useWebmanifestExtension: 'false'
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
    optional: [
      {
        name: {
          en: "Google Analytics",
        },
        description: {
          en:
            "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic."
        },
        src: "https://www.googletagmanager.com/gtag/js?id=G-SRSYDD3GJD",
        async: true,
        cookies: ["_ga", "_gat_gtag_G_SRSYDD3GJD", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-SRSYDD3GJD');
        }
      }
    ]
  },

};
