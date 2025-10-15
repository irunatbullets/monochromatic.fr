// https://nuxt.com/docs/api/configuration/nuxt-config
import { execSync } from 'child_process'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'nuxt-directus',    
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@unocss/nuxt'
  ],
  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],
  app: {
    baseURL: '',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  runtimeConfig: {
    public: {
      directus: {
        url: 'https://content.monochromatic.fr/',
      },
      assetsUrl: 'https://content.monochromatic.fr/assets/',
      lastPublished: execSync('git log -1 --format=%cd --date=iso')
        .toString()
        .trim(),
    },
  },
})