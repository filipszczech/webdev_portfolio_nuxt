<template>
    <div class="w-fit h-fit relative">
        <button 
            @click="handleClick"
            @mouseover="isButtonHovered = true" 
            @mouseleave="isButtonHovered = false" 
            :class="{ '-translate-y-[2px] -translate-x-[2px]': isButtonHovered }" 
            class="relative bg-secondary z-10 text-white border border-black w-fit py-3 px-12 transition-all duration-300">
            <p class="relative z-20 bg-secondary text-sm lg:text-lg">{{ text }}</p>
        </button>
        <div 
            :class="{ 'translate-y-[2px] translate-x-[2px]': isButtonHovered }"
            class="absolute top-2 left-2 w-full h-full bg-gray-700 z-0 transition-all duration-300">
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        text: String,
    });
    const emit = defineEmits(['click']);
    const isButtonHovered = ref(false);
    
    const handleClick = () => {
        emit('click');
    };
</script>

<style lang="scss" scoped>

</style>