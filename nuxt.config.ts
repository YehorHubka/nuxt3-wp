// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt3 + wpApi + Tailwind project',
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-16',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI
    }
  },
})
