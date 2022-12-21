<template>
    <div>Log In</div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '~~/store/auth.store';
const auth = useAuthStore()
auth.login();
</script>