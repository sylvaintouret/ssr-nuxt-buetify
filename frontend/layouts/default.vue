
<template>
<div class="min-h-full">
  
  <AppBar/>
  <AppHeader title="Something"/>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
    <slot/>
      <!-- /End replace -->
      {{ auth.user }}
    </div>
  </main>
</div>
  
</template>


<script setup lang="ts">
  import { useAuthStore } from '~~/store/auth.store';
  const auth = useAuthStore()
  auth.authenticate();
</script>
