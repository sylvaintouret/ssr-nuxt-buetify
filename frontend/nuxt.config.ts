// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    app: {
  
        head: {
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
        }
      },
    
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/persistedState.ts'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    
    modules: [
        // '@sidebase/nuxt-session',
        // '@nuxtjs/i18n',
        '@nuxtjs/robots',
        'nuxt-icon',
        '@pinia/nuxt',
        // must be placed last
        
        ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }],

    ],

    runtimeConfig: {
        apiUrl: process.env.API_URL || 'http://localhost:5000/api',
        authProvider: process.env.AUTH_PROVIDER || 'gitlab',
    },    
    robots: {
        configPath: 'server/config/robot.config',
    },

    


})

