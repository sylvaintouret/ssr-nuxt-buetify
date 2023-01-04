<template>
    <div class="flex flex-col border-opacity-50 p-2">
        
        <div class="mockup-code">
            <pre data-prefix="$"><code>logout sequence</code></pre> 
            <pre data-prefix=">" class="text-warning"><code>running...</code></pre> 
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            <pre data-prefix=">" class="text-success"><code>Redirecting you back home...</code></pre>
        </div>

        <NuxtLink to="/" class="btn gap-2"><Icon name="carbon:skip-back" size="1.75em"/>Home page</NuxtLink>

    </div>
</template>

<script lang="ts" setup>

import { useAuthStore } from '~~/store/auth.store';
const auth = useAuthStore()

auth.logout();

setTimeout(function(){ navigateTo('/') },3000);

</script>

