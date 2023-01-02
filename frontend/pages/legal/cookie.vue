<template>
    <div class="flex flex-col w-full border-opacity-50  p-2" style="min-height: 600px;">
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li> 
                <li>Legal</li> 
                <li><NuxtLink to="/legal/cookie">Cookie Policy</NuxtLink></li> 
            </ul>
            
            <div class="flex flex-col p-5">

                <div class="card card-bordered bg-base-100 shadow-md">
                    <div class="card-body">
                        <h2 class="card-title"><img src="~/assets/image/boite-a-cookies.png" height=50 width=50 alt="cookie_picture"/>Cookies</h2>

                        <div class="card-actions justify-end">
                            <button class="btn" @click="isModalActive = true" v-text="'Configure'"></button>
                            <button class="btn btn-outline btn-error" @click="deleteConsent()" v-if="cookiesEnabledIds && isConsentGiven" v-text="'Delete consent'">  </button>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    </div>
</template>


<script lang="ts" setup>
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions
} = useCookieControl()

const deleteConsent = () => {
    isConsentGiven.value = false
    }
</script>