<template>
    <div>I'm a protected page</div>
  </template>


<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>