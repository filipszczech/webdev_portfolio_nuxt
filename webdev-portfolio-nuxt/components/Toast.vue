<!-- components/Toast.vue -->
<template>
    <div v-if="isVisible" class="fixed z-[1000] bottom-6 left-6 max-w-xs w-full bg-gray-100 text-gray-700 p-4 shadow-lg border-2 border-gray-700 transition-opacity duration-300" :class="{ 'opacity-0': !isVisible }">
        <p>{{ message }}</p>
        <button @click="close" class="absolute top-2 right-2 text-gray-700">✖</button>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        message: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 3000,
        }
    });
    const isVisible = ref(true);
    const close = () => {
        isVisible.value = false;
    };
    setTimeout(close, props.duration);
</script>
  