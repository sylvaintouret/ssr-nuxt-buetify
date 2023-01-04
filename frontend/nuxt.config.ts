// https://nuxt.com/docs/api/configuration/nuxt-config

const appOptions = {
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
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
          description: 'For keeping user loggedIn and also theme management.',
          name: 'Necessary',
        }
      ],
      optional: [
        {
          id: 'ga', // if unset, the slugified name will be used
          name: 'Google Analytics',
          src: 'https://www.googletagmanager.com/gtag/js?id=12345',
          description: 'Track useage and actions taken accross our site for quality reasons.'
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
    // plugins: ['@/plugins/persistedState.ts'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
        'nuxt-icon',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        '@pinia-plugin-persistedstate/nuxt',
        
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

