<template>
    <div>Log out</div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '~~/store/auth.store';
const auth = useAuthStore()
auth.logout();
</script>