<template>
    <div class="flex flex-col w-full border-opacity-50  p-2" style="min-height: 600px;">
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li> 
                <li>Legal</li> 
                <li><NuxtLink to="/legal/cookie">Cookie Policy</NuxtLink></li> 
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
// definePageMeta({
//     middleware: ["auth"]
//   })
</script>