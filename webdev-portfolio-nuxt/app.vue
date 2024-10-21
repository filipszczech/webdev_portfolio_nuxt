<template>
    <div class="font-mono bg-primary dark:bg-black">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
    useHead({
      meta: [
        { name: "title", content: 'Web developer portfolio - Filip Szczęch' },
        { name: "description", content: 'Web developer portfolio created in nuxt, including cv, skills and projects.' },
        { property: 'og:url', content: '' },
        { property: 'og:title', content: 'Web developer portfolio - Filip Szczęch' },
        { property: 'og:description', content: 'Web developer portfolio created in nuxt, including cv, skills and projects.' },
        { property: 'og:image', content: 'https://wrwtorrdungvuhnltrxj.supabase.co/storage/v1/object/public/webdev%20portfolio/portfolio6.png' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: 'Web developer portfolio - Filip Szczęch' },
        { name: 'twitter:description', content: 'Web developer portfolio created in nuxt, including cv, skills and projects.' },
        { name: 'twitter:image', content: 'https://wrwtorrdungvuhnltrxj.supabase.co/storage/v1/object/public/webdev%20portfolio/portfolio6.png' },
        { name: 'twitter:card', content: '' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
        htmlAttrs: {
            lang: 'pl'
        },
        link: [
            {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
            }
        ]
    });
</script>

<style>
  .page-enter-active,
  .page-leave-active {
      transition: all 0.5s;
  }
  .page-enter-from,
  .page-leave-to {
      opacity: 0;
      transform: translateX(100px);
  }
</style>
