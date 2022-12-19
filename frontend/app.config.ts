export default defineAppConfig({
    title: 'Hello Nuxt',
    app: {
      logo: {
        url : 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
        alt : 'Company Logo'
    },
    nav: {
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About',
          to: '/about'
        },
        {
          title: 'Session Demo',
          to: '/session'
        },
        {
          title: 'States Demo',
          to: '/states'
        }
      ]
    }}
  })