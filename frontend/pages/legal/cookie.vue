<template>
    <div class="flex flex-col w-full border-opacity-50  p-2" style="min-height: 600px;">
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li> 
                <li>Legal</li> 
                <li><NuxtLink to="/legal/cookie">Cookie Policy</NuxtLink></li> 
            </ul>
        </div>  

            
        <div class="flex flex-col p-5 items-center">

            <div class="card card-bordered bg-base-100 shadow-md">
                <div class="card-body">
                    <h2 class="card-title"><Icon name="carbon:cookie" />Cookies</h2> 

                    

                    <h3 class="card-title">Necessary</h3>
                    <CookieControlItem v-for='cookie in moduleOptions.cookies.necessary' :cookie="cookie" :disabled=true></CookieControlItem>

                    <h3 class="card-title">Optional</h3>
                    <CookieControlItem v-for='cookie in moduleOptions.cookies.optional' :cookie="cookie"></CookieControlItem>

                    <!-- <div class="flex items-center justify-between" v-if="checkConsent()">
                        <h3 class="card-title">Delete consent</h3>
                        <button class="btn btn-outline btn-error" @click="setConsent({declineAll: true, consent: false})" v-if="cookiesEnabledIds && checkConsent()"> Delete </button>
                    </div> -->

                    <div class="card-actions justify-end" v-if="cookiesEnabledIds && checkConsent()">
                        <button class="btn btn-outline btn-error" @click="setConsent({declineAll: true, consent: false})"> Delete Consent</button>
                    </div>
                </div>

                

                
            </div>

                


            </div>

        
    </div>
</template>


<script lang="ts" setup>
import { useCookieControlStore } from '~~/store/cookieConsent.store';
const {setConsent, cookiesEnabledIds, isConsentGiven, moduleOptions} = useCookieControlStore()



const checkConsent = () => isConsentGiven
</script>