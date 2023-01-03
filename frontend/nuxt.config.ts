// https://nuxt.com/docs/api/configuration/nuxt-config

// https://github.com/dargmuesli/nuxt-cookie-control/
const cookieOptions = {
    // Position of cookie bar.
  // 'top-left', 'top-right', 'top-full', 'bottom-left', 'bottom-right', 'bottom-full'
  barPosition: 'bottom-right',

  // Component colors.
  // If you want to disable colors set colors property to false.
  colors: {
    barBackground: '#000',
    barButtonBackground: '#fff',
    barButtonColor: '#000',
    barButtonHoverBackground: '#333',
    barButtonHoverColor: '#fff',
    barTextColor: '#fff',
    checkboxActiveBackground: '#000',
    checkboxActiveCircleBackground: '#fff',
    checkboxDisabledBackground: '#ddd',
    checkboxDisabledCircleBackground: '#fff',
    checkboxInactiveBackground: '#000',
    checkboxInactiveCircleBackground: '#fff',
    controlButtonBackground: '#fff',
    controlButtonHoverBackground: '#000',
    controlButtonIconColor: '#000',
    controlButtonIconHoverColor: '#fff',
    modalBackground: '#fff',
    modalButtonBackground: '#000',
    modalButtonColor: '#fff',
    modalButtonHoverBackground: '#333',
    modalButtonHoverColor: '#fff',
    modalOverlay: '#000',
    modalOverlayOpacity: 0.8,
    modalTextColor: '#000',
    modalUnsavedColor: '#fff',
  },
  

  // The cookies that are to be controlled.
  // See detailed explanation further down below!
  cookies: {
    necessary: [
      {
        description: {
          en: 'Used for authenticating user and theme management',
          fr: 'Permet l\'authentification utilisateur et la mémorisation du thème'
        },
        name: {
          en: 'Necessary Cookie',
          fr: 'Cookie Nécessaire'
        },
        targetCookieIds: [
          "cookie_control_consent", 
          "cookie_control_enabled_cookies",
          "authStore",
          "access_token"
        ],
      }
    ],
    optional: [],
  },

  // Switch to toggle the "accept necessary" button.
  isAcceptNecessaryButtonEnabled: true,

  // Switch to toggle the button that opens the configuration modal.
  isControlButtonEnabled: false,

  // Switch to toggle the inclusion of this module's css.
  // If css is set to false, you will still be able to access your color variables.
  isCssEnabled: true,

  // Switch to toggle the css variables polyfill.
  isCssPolyfillEnabled: true,

  // Switch to toggle the separation of cookie name and description in the configuration modal by a dash.
  isDashInDescriptionEnabled: true,

  // Switch to toggle the blocking of iframes.
  // This can be used to prevent iframes from adding additional cookies.
  isIframeBlocked: false,
  // or:
  // isIframeBlocked: {
  //   initialState: false
  // },

  // The domain to set cookies on.
  // This is useful in case you have subdomains (shop.yourdomain.com)
  // domain: 'yourdomain.com',

  // The locales to include.
  locales: ['en', 'fr'],

}

const appOptions = {
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    // Example to add header script
    // script: [
    //   {
    //     src: "https://cdn.tagcommander.com/5233/uat/tc_lbb_31.js",
    //     async: true
    //   }
    // ],
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    title: 'My App',
    meta: [
      // <meta name="description" content="My amazing site">
      { name: 'description', content: 'My amazing site.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
}

const runTimeOptions = {
  apiUrl: process.env.API_URL || 'http://localhost:5000/api',
  authProvider: process.env.AUTH_PROVIDER || 'gitlab',
  cookiesConsent: {
    cookies: {
      necessary: [
        {
          description: 'Permet l\'authentification utilisateur et la mémorisation du thème',
          name: 'Nécessaire',
        }
      ],
      optional: [
        {
          id: 'ga', // if unset, the slugified name will be used
          name: 'Google Analytics',
          src: 'https://www.googletagmanager.com/gtag/js?id=12345',
          // targetCookieIds: ['cookie_control_consent', 'cookie_control_enabled_cookies']
        }
      ],
    }
  },
  
}


export default defineNuxtConfig({
    
    app: appOptions,
    
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      'assets/css/cookies.css'
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/persistedState.ts'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    
    modules: [
        // '@sidebase/nuxt-session',
        // '@nuxtjs/i18n',
        // ['@dargmuesli/nuxt-cookie-control', cookieOptions],
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
        'nuxt-icon',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        
        // must be placed last
        
        ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }],

    ],

    runtimeConfig: runTimeOptions,    
    robots: {
        configPath: 'server/config/robot.config',
    },
    colorMode: {
      preference: 'cupcake', // default value of $colorMode.preference
      classSuffix: '',
      dataValue: 'theme'
    }

    


})

