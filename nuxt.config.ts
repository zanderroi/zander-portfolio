// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-04-03',
  css: [
    '@/assets/css/global.css'
  ],
  plugins: ['~/plugins/fontawesome.js'],
  devtools: { enabled: true }
})
