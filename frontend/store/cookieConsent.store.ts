import { defineStore } from 'pinia';
import { ModuleOptions, Cookie } from '~~/models/cookies.consent';
import slugify from '@sindresorhus/slugify';

// taken from https://github.com/dargmuesli/nuxt-cookie-control mostly. But wanted to customize the cookie modal and page
export const useCookieControlStore = defineStore(
    'cookieControlStore',
    () => {

        const isConsentGiven = ref<boolean>(false)
        const cookiesEnabled = ref<Cookie[]>([])
        const cookiesEnabledIds = ref<string[]>([])
        const isModalActive = ref<boolean>()
        const moduleOptions = ref<ModuleOptions>(<ModuleOptions>useRuntimeConfig().cookiesConsent)
                
        const setConsent = ({
            type = undefined,
            consent = true,
            reload = true,
            declineAll = false,
          }: {
            type?: 'partial'
            consent?: boolean
            reload?: boolean
            declineAll?: boolean
          }) => {

            
            const cookieIds = declineAll
              ? []
              : type === 'partial' && consent
              ? cookiesEnabledIds.value
              : moduleOptions.value.cookies.optional.map((cookie: Cookie) =>
                  getCookieId(cookie)
                )
          
            const expirationDate = new Date()
            expirationDate.setFullYear(expirationDate.getFullYear() + 1)
            
            isConsentGiven.value = consent
            cookiesEnabledIds.value = cookieIds

            // rebuild 
            updateCookieList()

            window.location.reload()

          }
        
        const updateCookieList = () => {
            let enabledCookies = []

            enabledCookies.push(
                ...moduleOptions.value.cookies.optional.filter((cookieOptional) => {
                    return cookiesEnabledIds.value.includes(getCookieId(cookieOptional))
                })
            )
            enabledCookies.push(
                ...moduleOptions.value.cookies.necessary.filter((cookieOptional) => {
                    return cookiesEnabledIds.value.includes(getCookieId(cookieOptional))
                })
            )
            cookiesEnabled.value = enabledCookies

        }

        const getCookieId = (cookie: Cookie) =>  cookie.id || slugify(cookie.name)
        
        const getCookie = (id: string) =>  {
            for (const cookie of moduleOptions.value.cookies.optional){
                if (getCookieId(cookie) === id){return cookie}
            }
            for (const cookie of moduleOptions.value.cookies.necessary){
                if (getCookieId(cookie) === id){return cookie}
            }
            return null
        }

        const enableCookie = (cookie : Cookie) => {
            if (!cookiesEnabledIds.value.includes(getCookieId(cookie))){
                cookiesEnabledIds.value.push(getCookieId(cookie))
                updateCookieList()
                setHead()
            }
        }

        const disableCookie = (cookie : Cookie) => {
            if (cookiesEnabledIds.value.includes(getCookieId(cookie))){
                cookiesEnabledIds.value = cookiesEnabledIds.value.filter(id => id !== getCookieId(cookie)) 
                updateCookieList()
                window.location.reload()
            }
            
        }

        const setHead = () => {

            const head = document.getElementsByTagName('head')[0]
          
            for (const cookieEnabled of cookiesEnabled.value) {
              if (!cookieEnabled.src) continue
          
              const script = document.createElement('script')
              script.src = cookieEnabled.src
              head.appendChild(script)
            }
          }
          
        const isEnabled = (cookie : Cookie) => cookiesEnabledIds.value.includes(getCookieId(cookie))


        return {
            isConsentGiven,
            cookiesEnabled,
            cookiesEnabledIds,
            isModalActive,
            moduleOptions,
            setConsent,
            setHead,
            getCookieId,
            getCookie,
            isEnabled,
            enableCookie,
            disableCookie
        }
    }, 
    {
        
        persist: {
            paths: ['isConsentGiven', 'cookiesEnabled', 'cookiesEnabledIds'],
          },
    });