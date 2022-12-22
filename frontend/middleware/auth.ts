import { useAuthStore } from '~~/store/auth.store';



export default defineNuxtRouteMiddleware((to, from) => {
    
    const auth = useAuthStore()

    // back to home page if not logged in
    if (!auth.user) {
        console.log("not authenticated")
        auth.returnUrl = to.fullPath;
        return navigateTo('/errors/403', { redirectCode: 403 })
    }

    // let him through
    return navigateTo('/')
})