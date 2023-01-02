import { useAuthStore } from '~~/store/auth.store';



export default defineNuxtRouteMiddleware((to, from) => {
    
    const auth = useAuthStore()

    // back to home page if not logged in
    if (!auth.user.loggedIn) {
        // auth.returnUrl = to.fullPath;
        throw createError({ statusCode: 403, statusMessage: 'You must log in.' })
        return navigateTo('/')
    }
    

})