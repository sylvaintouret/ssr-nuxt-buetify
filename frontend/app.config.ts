import { navItem } from '~~/models/nav';

export default defineAppConfig({
    title: 'Hello Nuxt',
    app: {
      publicRoutes: [
        "/", "/auth/login", "/auth/logout", "/settings"
      ]
    }

})