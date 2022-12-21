<template>
    <img class="h-8 w-8" :src="app.logo.url" :alt="app.logo.alt" />
</template>

<script setup lang="ts">

const  { app }  = useAppConfig();

</script>
