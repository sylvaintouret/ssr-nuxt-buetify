<template>
    <client-only >
        <div class="card w-150 bg-neutral text-neutral-content" style="position:fixed; bottom: 10px; right: 10px;" v-if="!checkConsent()">
            <div class="card-body">
                <h2 class="card-title"><Icon name="carbon:cookie" />Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="setConsent({consent: true})">Accept All</button>
                    <button class="btn" @click="setConsent({ type: 'partial' , consent: true})">Accept Necessary</button>
                    <NuxtLink to="/legal/cookie" class="btn ">Settings</NuxtLink>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script lang="ts" setup>
import { useCookieControlStore } from '~~/store/cookieConsent.store';
const { isConsentGiven, setConsent, setHead} = useCookieControlStore()

const checkConsent = () => isConsentGiven

onBeforeMount(async () => { setHead() })
</script>