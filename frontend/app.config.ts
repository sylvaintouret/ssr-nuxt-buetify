import { navItem } from '~~/models/nav';

export default defineAppConfig({
    title: 'Hello Nuxt',
    app: {
      logo: {
        url : 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
        alt : 'Company Logo'
    },
    nav: {
      items: [
        new navItem('Home', '/', true),
      ]
    }}
  })