// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth'
  ],

  auth: {
    provider: {
      type: 'refresh',
      // refreshOnlyToken: true,
      endpoints: {
        getSession: { path: '/session', method: 'get' },
        refresh: { path: '/refresh', method: 'post' }
      },
      pages: {
        login: '/login'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken',
        maxAgeInSeconds: 60 * 5, // 5 min
        sameSiteAttribute: 'lax'
      },
      refreshToken: {
        signInResponseRefreshTokenPointer: '/token/refreshToken',
        refreshRequestTokenPointer: '/refreshToken'
      }
    },
    globalAppMiddleware: {
      isEnabled: true
    }
  },

  build: {
    transpile: ['jsonwebtoken']
  },

  typescript: {
    shim: false
  },

  compatibilityDate: '2024-07-16'
})
