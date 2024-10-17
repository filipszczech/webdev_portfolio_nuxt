<template>
    <div class="relative w-full object-cover z-10">
        <!-- main card div -->
        <div 
            @mouseover="isHovered = true" 
            @mouseleave="isHovered = false" 
            class="relative z-20 w-full bg-gray-100 border-2 border-gray-700 cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2">
            <NuxtImg 
                format="avif" 
                placeholder 
                :src="img"
                :alt="'portfolio - ' + currentName" 
                class="w-full object-cover" 
            />
            <div class='flex flex-col gap-1 p-6'>
                <h3 class='text-xl font-semibold'>{{ currentName }}</h3>
                <p>{{ currentDesc }}</p>
                <div class='flex gap-4 flex-wrap mt-3'>
                    <div v-for="tool in tools" :key="tool" class='relative bg-secondary text-white border border-black z-20'>
                        <p class='bg-secondary py-1 px-2'>{{ tool }}</p>
                        <div class='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- div to move -->
        <div
            :class="{ 'translate-y-2 translate-x-2': isHovered }"
            class="absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out">
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        name: String,
        desc: String,
        name_en: String,
        desc_en: String,
        img: String,
        tools: Array
    });
    const isHovered = ref(false);
    const { locale } = useI18n();
    const currentName = computed(() => (locale.value === 'pl' ? props.name : props?.name_en));
    const currentDesc = computed(() => (locale.value === 'pl' ? props.desc : props?.desc_en));
</script>