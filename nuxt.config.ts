// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-04-03',
  css: [
    '@/assets/css/global.css'
  ],
  devtools: { enabled: true }
})
