<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75" @click.self="closeModal"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :leave="{ opacity: 0 }"
        :duration="300"
    >
      <div class="bg-gray-100 dark:bg-gray-700 dark:text-gray-400 p-3 sm:p-6 w-[90%] max-w-2xl relative max-h-[80vh] overflow-y-scroll md:text-lg">
        <button @click="closeModal" class="absolute top-3 sm:top-6 right-3 sm:right-6">✖</button>
        <main>
          <slot>
          </slot>
        </main>
      </div>
    </div>
</template>
  
<script setup>
    import { useMotions } from '@vueuse/motion'
    const motions = useMotions();
    const props = defineProps({
        isOpen: Boolean
    });
    const emit = defineEmits(['close']);
    
    function closeModal() {
        emit('close');
    }
</script>
  
<style scoped>
    h2 {
        font-family: "Righteous", sans-serif;
    }
</style>
  