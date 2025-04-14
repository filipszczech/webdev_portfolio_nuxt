<template>
    <div ref="motionTarget">
        <h2 class="section-title">{{ $t('section_titles.tech_stack') }}</h2>
        <div class="flex flex-col gap-6 xl:gap-9 text-lg dark:text-gray-400">
        <div>
            <p class="mb-3 font-semibold">{{ $t('tech_stack.languages') }}</p>
            <div class="flex gap-5 lg:gap-6 flex-wrap">
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/TypeScript.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Python.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/HTML5.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/CSS3.svg"/>
            </div>
        </div>
        <div>
            <p class="mb-3 font-semibold">{{ $t('tech_stack.frameworks') }}</p>
            <div class="flex gap-5 lg:gap-6 flex-wrap">
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Vue.js.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Nuxt-JS.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/React.svg"/>
                <!-- <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"/> -->
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/png-shadow-512/Django.png"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Node.js.svg"/>
                <!-- <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/png-shadow-512/Express.png"/> -->
            </div>
        </div>
        <div>
            <p class="mb-3 font-semibold">{{ $t('tech_stack.tools') }}</p>
            <div class="flex gap-5 lg:gap-6 flex-wrap">
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Webpack.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/NPM.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"/>
                <!-- <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg"/> -->
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Swagger.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Vite.js.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Figma.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/png-shadow-512/Linux.png"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://icon.icepanel.io/Technology/svg/Docker.svg"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://docs.hetzner.com/static/1dbc8e5220638f7193ef9f5a24c2eb5b/0b533/coolify-logo.png"/>
                <img alt="techstack icon" class="w-9 h-9 lg:w-16 lg:h-16" src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"/>

            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
    const { target: motionTarget } = useMotionVisibleOnce();
</script>

<style scoped>
    h2 {
        font-family: "Righteous", sans-serif;
    }
</style>