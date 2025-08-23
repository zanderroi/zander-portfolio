export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-04-03',
  css: [
    '@/assets/css/global.css'
  ],
  plugins: ['~/plugins/fontawesome.js'],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Zander - Portfolio',
      meta: [
        { name: 'description', content: 'Your app description' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})