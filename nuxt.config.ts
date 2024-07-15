// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth'
  ],
  typescript: {
    shim: false
  },
  auth: {
    baseURL: 'https://my-external-app.com/',
    provider: {
      type: 'refresh',
      endpoints: {
        signIn: { path: 'login', method: 'post' }
      }
    }
  },

  compatibilityDate: '2024-07-15'
})
