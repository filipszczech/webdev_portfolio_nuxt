<template>
    <div class="lg:pt-12 lg:px-8">
        <header>
            <nav class="relative w-full bg-transparent z-10 max-w-[76rem] mx-auto text-gray-700">
                <div
                    @mouseover="isHovered = true" 
                    @mouseleave="isHovered = false"  
                    class="relative z-20 bg-gray-100 dark:bg-gray-400 flex flex-col justify-center items-center border-2 border-gray-700 gap-6 max-w-7xl mx-auto px-5 py-5 xl:py-9 transition-transform duration-300 ease-in-out transform lg:hover:-translate-y-2 lg:hover:-translate-x-2">
                    <div class="w-full grid grid-cols-3 xl:px-4 gap-6">
                        <div class="hidden lg:block"></div>
                        <!-- logo -->
                        <NuxtLink :to="localePath('/')" class="col-span-3 lg:col-span-1 w-fit mx-auto">
                            <h2 class="text-4xl font-semibold text-center transition-all duration-300 hover:scale-105 w-fit">Filip Szczęch</h2>
                        </NuxtLink>
                        <div class="col-span-3 lg:col-span-1 flex gap-3 items-center justify-center lg:justify-end">
                            <!-- theme swith -->
                            <ThemeSwitch />
                            <!-- language switch -->
                            <LocaleSwitch />
                        </div>
                    </div>
                    <!-- Hamburger menu icon for small screens -->
                    <div class="lg:hidden hover-scale-105 cursor-pointer" @click="toggleMenu">
                        <Icon name="mdi:hamburger-menu" style="color: black" size="2rem" />
                    </div>
                    <div v-if="route.path != localePath('index')" class="navbar-links hidden lg:flex gap-9 xl:gap-12 font-semibold text-gray-700">
                        <NuxtLink :to="localePath('/')" class="transition-all duration-300 hover:scale-110">
                            {{ $t('header.back_to_homepage') }}
                        </NuxtLink>
                        <NuxtLink :to="localePath('/about')" class="transition-all duration-300 hover:scale-110">
                            <span>{{ $t('header.about_page') }}</span>
                        </NuxtLink>
                    </div>
                    <!-- Navigation links for larger screens -->
                    <div v-else class="navbar-links hidden lg:flex gap-9 xl:gap-12 font-semibold text-gray-700">
                        <button @click="scrollToSection('profile_section')" class="transition-all duration-300 hover:scale-110">
                            <p>{{ $t('header.profile_link') }}</p>
                        </button>
                        <button @click="scrollToSection('portfolio_section')" class="transition-all duration-300 hover:scale-110">
                            <p>{{ $t('header.portfolio_link') }}</p>
                        </button>
                        <button @click="scrollToSection('cv_section')" class="transition-all duration-300 hover:scale-110">
                            <p>CV</p>
                        </button>
                        <button @click="scrollToSection('contact_section')" class="transition-all duration-300 hover:scale-110">
                            <p>{{ $t('header.contact_link') }}</p>
                        </button>
                        <NuxtLink :to="localePath('/about')" class="transition-all duration-300 hover:scale-110">
                            <span>{{ $t('header.about_page') }}</span>
                        </NuxtLink>
                    </div>
                    <!-- Slide-out menu for small screens -->
                    <transition name="slide-down">
                        <ul v-if="isMenuOpen && route.path === localePath('index')" class="flex flex-col justify-center items-center gap-4 lg:hidden">
                            <li>
                                <button @click="scrollToSection('profile_section')" class="transition-all duration-300 hover:scale-110">
                                    {{ $t('header.profile_link') }}
                                </button>
                            </li>
                            <li>
                                <button @click="scrollToSection('portfolio_section')" class="transition-all duration-300 hover:scale-110">
                                    {{ $t('header.portfolio_link') }}
                                </button>
                            </li>
                            <li>
                                <button @click="scrollToSection('cv_section')" class="transition-all duration-300 hover:scale-110">
                                    <p>CV</p>
                                </button>
                            </li>
                            <li>
                                <button @click="scrollToSection('contact_section')" class="transition-all duration-300 hover:scale-110">
                                    {{ $t('header.contact_link') }}
                                </button>
                            </li>
                            <li>
                                <NuxtLink :to="localePath('/about')">
                                    <span>{{ $t('header.about_page') }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                        <ul v-else-if="isMenuOpen && route.path != localePath('index')" class="flex flex-col justify-center items-center gap-4 lg:hidden">
                            <li>
                                <NuxtLink :to="localePath('/')" class="transition-all duration-300 hover:scale-110">
                                    {{ $t('header.back_to_homepage') }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="localePath('/about')" class="transition-all duration-300 hover:scale-110">
                                    <span>{{ $t('header.about_page') }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </transition>
                </div>
                <div
                    :class="{ 'translate-y-2 translate-x-2': isHovered }"
                    class="hidden lg:block absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out">
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>
    const isHovered = ref(false);
    const isMenuOpen = ref(false);
    const localePath = useLocalePath();
    const route = useRoute();
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };
    const scrollToSection = (section_id) => {
        const section = document.getElementById(section_id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
</script>

<style scoped>
    .slide-down-enter-active, .slide-down-leave-active {
        transition: all 0.5s ease;
    }

    .slide-down-enter-from, .slide-down-leave-to {
        opacity: 0;
        max-height: 0;
    }

    .slide-down-enter-to, .slide-down-leave-from {
        opacity: 1;
        max-height: 300px;
    }

    .navbar-links .router-link-exact-active {
        border-bottom: 1px solid;
    }
    
    h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Sigmar One", sans-serif;
    }

</style>