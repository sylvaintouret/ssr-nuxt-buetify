import { useAuthStore } from '~~/store/auth.store';



export default defineNuxtRouteMiddleware((to, from) => {
    
    const auth = useAuthStore()
    const  { app }  = useAppConfig();
    const publicPages = app.publicRoutes;
    const authRequired = !publicPages.includes(to.path);

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return to.path;
    }

    return to.path
}
)