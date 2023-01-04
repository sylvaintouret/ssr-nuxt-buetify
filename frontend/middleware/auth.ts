import { useAuthStore } from '~~/store/auth.store';
import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware( () => {
    
        const app = useNuxtApp();
        const auth = useAuthStore(app.$pinia);
        
        const { user } = storeToRefs(auth);
    
        // back to home page if not logged in
        if (!user.value.loggedIn) {
            throw createError({ statusCode: 403, statusMessage: 'You must log in.' })
            return navigateTo('/')
        }


    
    
    

})