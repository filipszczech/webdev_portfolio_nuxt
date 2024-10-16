<template>
    <div class="pt-12">
        <header>
            <nav class="relative w-full bg-primary z-10 max-w-7xl mx-auto text-gray-800">
                <div
                    @mouseover="isHovered = true" 
                    @mouseleave="isHovered = false"  
                    class="relative z-20 bg-primary flex flex-col justify-center items-center border-2 border-gray-700 gap-6 max-w-[96rem] mx-auto px-4 py-6 xl:py-9 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2">
                    <div class="absolute top-6 xl:top-9 right-6 xl:right-9 z-20 ">
                        <span>PL</span>
                        <span> | </span>
                        <span>EN</span>
                    </div>
                    <NuxtLink to="/">
                        <img 
                            src='https://photo-portfolio-neon.vercel.app/img/logo3.png'
                            alt="logo image" 
                            class="h-12 w-fit" 
                        />
                    </NuxtLink>
                    <!-- Hamburger menu icon for small screens -->
                    <div class="lg:hidden hover-scale-105 cursor-pointer" @click="toggleMenu">
                        <Icon name="mdi:hamburger-menu" style="color: black" />
                    </div>
                    <!-- Navigation links for larger screens -->
                    <ul class="navbar-links hidden lg:flex gap-9 xl:gap-12 font-semibold text-gray-700">
                        <li>
                            <p>HOME</p>
                        </li>
                        <li>
                            <p>MÓJ PROFIL</p>
                        </li>
                        <li>
                            <p>PORTFOLIO</p>
                        </li>
                        <li>
                            <p>KONTAKT</p>
                        </li>
                    </ul>
                </div>
                <!-- Slide-out menu for small screens -->
                <transition name="slide-down">
                    <ul v-if="isMenuOpen" class="flex flex-col justify-center items-end gap-4 lg:hidden py-4">
                        <p>menu element</p>
                        <p>menu element</p>
                        <p>menu element</p>
                    </ul>
                </transition>
                <div
                    :class="{ 'translate-y-2 translate-x-2': isHovered }"
                    class="absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out">
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>
    const isHovered = ref(false);
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }
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
</style>