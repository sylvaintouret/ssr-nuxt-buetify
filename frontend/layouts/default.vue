<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->
    <div>
        <nav class="flex flex-row ">

            <div class="navbar bg-base-300">

                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                        <li v-for="(nav, id) in navigation" :key="id"><NuxtLink  :to="nav.to" > {{  nav.name  }}</NuxtLink></li>
                    </ul>
                    </div>
                </div>

                <div class="navbar-end">
                    <button tabindex="0" class="btn  btn-ghost btn-circle avatar" @click="toggleTheme">
                        <Icon name="carbon:color-switch" size="1.75em"/>
                    </button>
                    <div class="dropdown dropdown-end">
                        <label v-if="user.loggedIn" tabindex="0" class="btn  btn-ghost btn-circle avatar">
                            <Icon :name="user.picture" size="1.75em"/>
                        </label>
                        <label v-if="!user.loggedIn" tabindex="0" class="btn  btn-ghost btn-circle avatar">
                            <Icon  name="carbon:login" size="1.75em"/>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52">
                            <li v-for="(menu, id) in userNavigation" :key="id"><NuxtLink  :to="menu.to"> {{ menu.name }}  <div v-if="menu.badge" :class="menu.badge.class">{{ menu.badge.content }} </div> </NuxtLink></li>
                        </ul>
                    </div>

                </div>
           
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
        
        <footer class="footer p-10 ">
            <div>
                <span class="footer-title">Services</span> 
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div> 
            <div>
                <span class="footer-title">Company</span> 
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div> 
            <div>
                <span class="footer-title">Legal</span> 
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
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
            { name: 'Your Profile', to: '/user/profile' , badge: { class: 'badge', content: 'new!'}},
            { name: 'Sign out', to: '/auth/logout' , badge: null},
        ]
        ) : (
        [
            { name: 'Sign in', to: '/auth/login' , badge: null},
        ])

}) 

// theme
const colorMode = useColorMode();
const toggleTheme = () => {
    colorMode.preference = colorMode.preference == 'dark' ? 'light' : 'dark';  
}


</script>


