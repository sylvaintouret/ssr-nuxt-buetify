<template>
    <div class="ml-10 flex items-baseline space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
    
        <NuxtLink 
          v-for="(item, key) of items" 
          :key="key" :to="item.to" 
          :class="isActive(item.to)"
          >{{ item.title }}</NuxtLink>
        
    </div>
</template>

<script setup lang="ts">

const  { app }  = useAppConfig();
const { items } = app.nav;

</script>

<script lang="ts">

    export default {
        methods : {
            isActive(route: string) {

                return (route == this.$route.path) ? "rounded-md px-4 py-2 bg-gray-900 text-white" : "rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white";    
            }
        }
        
    }
    

</script>



