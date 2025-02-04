// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.ENABLE_DEVTOOLS === 'true' },
  routeRules: {
    '/': { prerender: true },
    '/**': { isr: 3600 },
  },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'title',
      meta: [
        { name: "description", content: 'desc' },
        { property: 'og:url', content: 'url' },
        { property: 'og:title', content: 'title' },
        { property: 'og:description', content: 'og desc' },
        { property: 'og:image', content: '' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: 'title' },
        { name: 'twitter:description', content: 'twitter desc' },
        { name: 'twitter:image', content: '' },
        { name: 'twitter:card', content: 'summary' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxt/image', ['nuxt-mail', {
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  }], '@pinia/nuxt', '@nuxt/icon', '@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxt/fonts', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-schema-org', '@vueuse/motion/nuxt'],
  mail: {
    message: {
      to: process.env.EMAIL_USER,
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  },
  supabase: {
    redirect: false
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'pl',
        file: 'pl.json'
      },
      {
        code: 'en',
        file: 'en.json'
      },
    ],
    defaultLocale: 'pl',
    silentTranslationWarn: true,
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  image: {
    format: ['webp', 'jpg']
  },
  site: {
    url: 'https://filipszczech-dev.pl',
    name: 'Filip Szczęch - webdev portfolio'
  },
  robots: {
    UserAgent: '*',
    Disallow: '', 
    sitemap: [
      'https://filipszczech-dev.pl/sitemap.xml',
    ],
  },
})