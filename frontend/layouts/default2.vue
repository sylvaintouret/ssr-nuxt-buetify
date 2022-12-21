
<template>
<div class="min-h-full">
  
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <slot/>
      <!-- /End replace -->
      <p>User</p>

        <p>email : {{  auth.user.email ? auth.user.email : "Guest" }}</p>
        <p>logged in : {{  auth.user.loggedIn ? "True" : "False" }}</p>
    </div>
  </main>
</div>
  
</template>

<script lang="ts" setup>
    import { useAuthStore } from '~~/store/auth.store';
    const auth = useAuthStore()
    auth.authenticate();

</script>




