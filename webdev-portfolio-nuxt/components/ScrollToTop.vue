<template>
    <Transition  name="fade" mode="out-in">
        <button
            v-if="showButton"
            @click="scrollToTop"
            class="hidden lg:block fixed z-[50] bottom-4 md:bottom-6 right-4 md:right-6 bg-gray-100 dark:bg-gray-400 border-2 border-gray-700 text-gray-700 px-2 py-1"
            >
            <Icon name="mdi:arrow-top-bold" size="2.5rem" />
        </button>
    </Transition>
</template>
  
<script setup>
    const showButton = ref(false);
    
    const toggleButtonVisibility = () => {
        if (window.scrollY > 200) {
            showButton.value = true
        } else {
            showButton.value = false
        }
    }
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    onMounted(() => {
        window.addEventListener('scroll', toggleButtonVisibility)
    })
    
    onUnmounted(() => {
        window.removeEventListener('scroll', toggleButtonVisibility)
    })
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(-1rem);
    }
</style>