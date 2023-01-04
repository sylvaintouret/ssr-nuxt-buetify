<template>
    <div class="flex flex-col w-full border-opacity-50 p-2" style="min-height: 600px;">
        <div class="text-sm breadcrumbs">
                
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li> 
                <li>User</li>
                <li><NuxtLink to="/user/profile">Profile</NuxtLink> </li> 
            </ul>
        </div>


        <div class="flex flex-col p-5 items-center">

            <div class="card card-bordered bg-base-100 shadow-md">
                <div class="card-body">
                    <h2 class="card-title"><Avatar :user="user" />Profile</h2> 

                    
                    

                    <h3 class="card-title">{{ user.email || "no email"}}</h3>

                    {{ user.createdAt || "no date" }}
                  

                    

                </div>  
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>

import { useAuthStore } from '~~/store/auth.store';
import { storeToRefs} from 'pinia'


definePageMeta({
  middleware: "auth"
  })

const auth = useAuthStore()

auth.authenticate();
const { user } = storeToRefs(auth)



// const test = computed( () => )
</script>