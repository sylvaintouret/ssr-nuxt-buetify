<template>
    <div>
        Index

        <button 
        v-if="!auth.user.loggedIn"
        :class="styles.button"
        @click="auth.login"
        >Signin</button>

        <button 
        v-if="auth.user.loggedIn"
        :class="styles.button"
        @click="auth.logout"
        >Logout</button>

        

    </div>
</template>

<script lang="ts" setup>
    import { useAuthStore } from '~~/store/auth.store';
    const auth = useAuthStore()
    // this is the redirect url for login so we check if we have an authtoken in the url query, if so, we connect the user
    
    //  styling 
    const styles = {
        button : 'rounded-xl px-4 py-2 bg-green-400'
    }


</script>
