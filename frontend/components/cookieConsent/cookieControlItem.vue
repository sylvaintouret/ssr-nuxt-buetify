<template>
    <div class="flex gap-10">
        <div v-if="disabled" class="flex-none w-14 h-14"><input type="checkbox" class="toggle" checked="true" disabled="true"/></div>
        <div v-if="!disabled" class="flex-none w-14 h-14"><input type="checkbox" class="toggle" v-model="state" @change="onChange"/></div>
        <div class="flex-none w-50 h-14">{{ cookie.name || cookie.id}}</div>
        <div >{{ cookie.description }}</div>
    </div>
</template>

<script lang="ts" setup>

import { useCookieControlStore } from '~~/store/cookieConsent.store';
import { Cookie } from '~~/models/cookies.consent';
export interface Props {
    cookie: Cookie
    disabled?: boolean
}

const { isEnabled, enableCookie, disableCookie } = useCookieControlStore()

const props = withDefaults(defineProps<Props>(), {
    disabled: false
})

const state = ref(false)

const onChange = () => { 
    
    if (state.value){
        enableCookie(props.cookie)
    }
    else{
        disableCookie(props.cookie)
    }
    
}
// toggleCookie(cookie)
// isEnabled(cookie)
</script>