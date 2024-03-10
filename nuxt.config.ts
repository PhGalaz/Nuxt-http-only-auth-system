// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
  ]],

  imports: {
    dirs: ['store'],
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:3002/api/v2',
    },
  },
})
