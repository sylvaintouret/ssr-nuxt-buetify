import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import { defineNuxtPlugin } from "#app";

// this backups the store in the localstorage
// export default defineNuxtPlugin((nuxtApp) => {
//   if (process.client) {
//     nuxtApp.$pinia.use(createPersistedStatePlugin())
//   }

// });


// this backups the store in cookies
import Cookies from 'js-cookie'
import cookie from 'cookie'

export default defineNuxtPlugin((nuxtApp) => {
// export default function ({ $pinia, ssrContext }) {
  nuxtApp.$pinia.use(
    createPersistedStatePlugin({
      storage: {
        getItem: (key) => {
          // See https://nuxtjs.org/guide/plugins/#using-process-flags
          if (process.server) {
            const parsedCookies = cookie.parse(nuxtApp.ssrContext.req.headers.cookie)
            return parsedCookies[key]
          } else {
            return Cookies.get(key)
          }
        },
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 365, secure: false }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  )});
