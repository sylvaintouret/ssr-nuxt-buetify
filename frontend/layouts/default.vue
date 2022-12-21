<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->
    <div>
        <nav>
            <div>
                <NuxtLink v-for="(nav, id) in navigation" :key="id" :to="nav.to"> {{ nav.name }}</NuxtLink>
            </div>

            <div>
                <NuxtLink v-for="(menu, id) in userNavigation" :key="id" :to="menu.to"> {{ menu.name }}</NuxtLink>
            </div>
        </nav>
  
        <!-- -->
        <main>
            <div>
            <!-- Replace with your content -->
            <slot />
            <!-- /End replace -->
            </div>
        </main>
        
        <footer>

        </footer>
    </div>
  </template>
  
<script lang="ts" setup>

import { useAuthStore } from '~~/store/auth.store';
import { storeToRefs} from 'pinia'

const route = useRoute()
const auth = useAuthStore()

auth.authenticate();

const { user } = storeToRefs(auth)

const navigation = [
    { name: 'Home', to: '/', current: route.path == '/' },
    { name: 'Settings', to: '/settings', current: route.path == '/settings' },
]

const userNavigation = computed(() => {

    return user.value.loggedIn ? (
        [
            { name: 'Your Profile', to: '/user/profile' },
            { name: 'Settings', to: '/settings' },
            { name: 'Sign out', to: '/auth/logout' },
        ]
        ) : (
        [
            { name: 'Settings', to: '/settings' },
            { name: 'Sign in', to: '/auth/login' },
        ])

}) 






</script>


