// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-13',
  modules: [
    '@sidebase/nuxt-auth'
  ],
  auth: {
    globalAppMiddleware: false,
    baseURL: '/api/auth',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        getSession: { path: '/session', method: 'get' }
      },
      pages: {
        login: '/auth/signin'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      },
      session: {
        dataType: {
          id: 'string',
          name: 'string',
          email: 'string',
          avatar: 'string',
          role: '\'admin\' | \'guest\' | \'account\'',
          subscriptions: '{ id: number, status: \'ACTIVE\' | \'INACTIVE\' }[]'
        },
        dataResponsePointer: '/'
      }
    },
  },
  typescript: {
    shim: false
  },
  build: {
    transpile: ['jsonwebtoken']
  },
})
