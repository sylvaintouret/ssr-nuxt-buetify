import { defineStore } from 'pinia';
import { User } from '~~/models/auth/user';



export const useAuthStore = defineStore(
    'authStore',
    () => {
        const { apiUrl, authProvider } = useRuntimeConfig();
        
        const provider = ref(authProvider);
        const baseUrl = ref(apiUrl);
        const user = ref(new User());
        const returnUrl = ref('');


        // check for an authToken
        const login = () => {
            window.location.href = `${baseUrl.value}/auth/login-redirect?provider=${ provider.value || 'gitlab'}`
        }
        const logout = async () => {
            

            if (user.value.loggedIn){
                const response = await $fetch(`${baseUrl.value}/auth/logout`,{
                    method: 'GET',
                    credentials: 'include'}).catch((error) => user.value = new User())
            }
            user.value = new User()

            if (returnUrl.value){
                const router = useRouter()
                router.push(returnUrl.value)
            }

        }
        const authenticate = async () => {
            const route = useRoute();
            const { authToken } = route.query;
            
            if (!user.value.loggedIn && authToken && process.client) {
                getAccessToken(authToken.toString())
            }
            
            if (user.value.loggedIn && process.client){
                checkUser()
            }

            if (returnUrl.value){
                const router = useRouter()
                router.push(returnUrl.value)
            }
            

        }
        const getAccessToken = async (authToken : string) => {
            const response = await $fetch(`${baseUrl.value}/auth/login`, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + authToken
                },
                credentials: 'include',
                parseResponse: JSON.parse,
                onResponse: async({ request, response, options }) => {
                    // Log response  
                    user.value = new User(response._data)
                    
                }
            }).catch((error) => user.value = new User())

        }
        const checkUser = async () => {
            const response = await $fetch(`${baseUrl.value}/auth/user-session-status`, {
                method: 'GET',
                credentials: 'include',
                parseResponse: JSON.parse
            }).catch((error) => {
                console.log("Unable to authenticate user")
                user.value = new User()}
                )

            if (response){
                user.value = new User(response)
            }
        }


        return {
            user,
            returnUrl,
            login,
            logout,
            authenticate,
            baseUrl,
            provider
        }
      }, 
    {
    persistedState: {
        // store options goes here
    }
    });