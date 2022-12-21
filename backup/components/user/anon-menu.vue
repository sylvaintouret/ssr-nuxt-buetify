<template>
    <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

        <NuxtLink 
          v-for="(item, key) of items" 
          :key="key" :to="item.to" 
          class="block px-4 py-2 text-sm text-gray-700"
          >{{ item.title }}
        </NuxtLink>
    </div>
</template>


<script setup lang="ts">

const items = [
    { title: 'Settings', to: '/settings'},
    { title: 'Sign in', to: '/auth/signin'}
]

</script>