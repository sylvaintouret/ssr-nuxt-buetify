
<template>
  <div>
    <header>
    <nav>
      <ul>
        <li v-for="(item, key) of items" :key="key">
          <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <slot />
  </div>
  
</template>


<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          title: 'About',
          icon: 'lightbulb',
          to: '/about'
        },
        {
          title: 'Session Demo',
          icon: 'lightbulb',
          to: '/session'
        },
        {
          title: 'States Demo',
          icon: 'lightbulb',
          to: '/states'
        },
        {
          title: 'Auth Demo',
          icon: 'lightbulb',
          to: '/auth'
        }
      ]
    }
  }
}
</script>
