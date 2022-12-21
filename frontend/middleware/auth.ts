import { useAuthStore } from '~~/store/auth.store';



export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if an user is authenticated
    const auth = useAuthStore()
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);

    // if (authRequired && !auth.user) {
    //     auth.returnUrl = to.fullPath;
    //     return '/';
    // }
    
    return navigateTo(to)
}
)