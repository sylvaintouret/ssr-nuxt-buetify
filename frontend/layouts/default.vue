
<template>
<div class="min-h-full">
  
  <AppBar/>
  <AppHeader title="Something"/>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
    <slot/>
      <!-- /End replace -->
    </div>
  </main>
</div>
  
</template>


<script lang="ts">
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
        }
      ]
    }
  }
}
</script>
