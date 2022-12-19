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
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    modules: [
        '@sidebase/nuxt-session',
        '@nuxtjs/robots',
        'nuxt-icon',
        '@nuxtjs/tailwindcss',
        // must be placed last
        
        ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }],

    ],
    
    robots: {
        configPath: 'server/config/robot.config',
    },


})

