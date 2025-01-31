<template>
    <div>
        <section class="md:text-lg mb-16 md:mb-24 text-gray-700 dark:text-gray-400" ref="motionTarget">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 xl:mb-9 text-gray-700 dark:text-gray-400">{{ $t('about.project_info.title') }}</h1>
            <p class="md:pr-48">{{ $t('about.project_info.description') }}</p>
            <div class="mt-6 xl:mt-9">
                <h2 class="mb-3">{{ $t('about.project_info.tech_stack') }}</h2>
                <div class="flex gap-4 flex-wrap">
                    <a href="https://vuejs.org/" target="_blank" rel="noopener" class="hover:scale-110 transition-all duration-300">
                        <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Vue.js.svg"/>
                    </a>
                    <a href="https://nuxt.com/" target="_blank" rel="noopener" class="hover:scale-110 transition-all duration-300">
                        <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Nuxt-JS.svg"/>
                    </a>
                    <a href="https://supabase.com/" target="_blank" rel="noopener" class="hover:scale-110 transition-all duration-300">
                        <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"/>
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="hover:scale-110 transition-all duration-300">
                        <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"/>
                    </a>
                    <a href="https://vercel.com/" target="_blank" rel="noopener" class="hover:scale-110 transition-all duration-300">
                        <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png"/>
                    </a>
                </div>
            </div>
            <div class="mt-6 xl:mt-9">
                <h2 class="mb-3">{{ $t('about.project_info.github_project') }}</h2>
                <div class="w-fit hover:scale-105 transition-all duration-300">
                    <a href="https://github.com/filipszczech/webdev_portfolio_nuxt" target="_blank" rel="noopener" class="">
                        <img alt="techstack icon" class="h-12 lg:h-20" src="https://pngimg.com/uploads/github/github_PNG15.png"/>
                    </a>
                </div>
            </div>
            <div class="mt-6 xl:mt-9 text-gray-700 dark:text-gray-400">
                <EndpointList />
            </div>
            <div class="mt-9 xl:mt-12">
                <h2 class="mb-3">{{ $t('about.project_info.used_packages') }}</h2>
                <ul class="list-disc pl-8">
                    <li v-for="p, in $tm('about.project_info.packages_list')" :key="p" class="mb-2">
                        @{{ $rt(p) }}
                    </li>
                </ul>
            </div>
            <div class="mt-6 xl:mt-9">
                <h2 class="mb-3">{{ $t('about.project_info.color_palette') }}</h2>
                <div class="flex flex-wrap border-2 border-black w-fit">
                    <div class="w-9 h-9 lg:w-16 lg:h-16 bg-primary"></div>
                    <div class="w-9 h-9 lg:w-16 lg:h-16 bg-gray-100"></div>
                    <div class="w-9 h-9 lg:w-16 lg:h-16 bg-gray-400"></div>
                    <div class="w-9 h-9 lg:w-16 lg:h-16 bg-gray-700"></div>
                    <div class="w-9 h-9 lg:w-16 lg:h-16 bg-secondary"></div>
                    <div class="w-9 h-9 lg:w-16 lg:h-16 bg-red-500"></div>
                </div>
            </div>
        </section>
        <!-- scroll to top -->
        <ScrollToTop />
    </div>
</template>

<script setup>
    useHead({
        title: "Filip Szczęch | portfolio - o projekcie",
        meta: [
            { name: 'description', content: 'Web developer portfolio - project details.' },
            { property: 'og:description', content: 'Web developer portfolio - project details.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
    const { target: motionTarget } = useMotionVisibleOnce();
</script>

<style scoped>
    h1, h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>