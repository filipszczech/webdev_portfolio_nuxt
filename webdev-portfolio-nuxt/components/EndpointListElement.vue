<template>
    <div class="lg:w-3/4 border-2 border-gray-700 p-2 text-gray-700">
        <div @click="isOpen = !isOpen" class="relative flex gap-3 items-center cursor-pointer">
            <div class="px-8 py-1 bg-secondary text-gray-100 text-center w-fit">
                {{ endpointType }}
            </div>
            <span class="dark:text-gray-400">{{ endpointPath }}</span>
            <Icon name="mdi:arrow-bottom" size="1.5rem" :class="isOpen && 'rotate-180'" class="absolute right-2 dark:text-gray-400 transition-all duration-300" />
        </div>
        <transition name="slide">
            <div v-if="isOpen" class="content mt-3">
                <div v-if="exampleData">
                    <pre class="p-3 bg-gray-100 dark:bg-gray-400 dark:text-gray-800 overflow-x-auto">{{ exampleData }}</pre>
                </div>
                <div v-else>Error loading data.</div>
            </div>
        </transition>
    </div>
</template>

<script setup>
    const props = defineProps({
        exampleData: Object,
        endpointType: String,
        endpointPath: String,
    });
    const isOpen = ref(false);
</script>

<style scoped>
    .slide-enter-active, .slide-leave-active {
        transition: all 0.3s ease;
        overflow: hidden;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
    .content {
        opacity: 100;
    }
    .rotate-180 {
        transform: rotate(180deg);
    }

</style>