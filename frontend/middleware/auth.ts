import { useAuthStore } from '~~/store/auth.store';



export default defineNuxtRouteMiddleware((to, from) => {
    
    const auth = useAuthStore()
    const publicPages = ['/'];
    // const authRequired = !publicPages.includes(to.path);
    const authRequired = false;
    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/';
    }
    
    return navigateTo(to)
}
)