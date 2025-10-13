// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@unocss/nuxt'
  ],
  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],
})