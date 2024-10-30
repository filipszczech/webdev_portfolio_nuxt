<template>
    <div>
        <div class="grid grid-cols-6 gap-9 xl:gap-16 grid-auto-rows-[minmax(0,_1fr)] mb-9">
            <div @click="handleClick" class="w-full col-span-6 sm:col-span-3 lg:col-span-2 border-2 border-black p-4 bg-gray-100 dark:bg-gray-400 cursor-pointer overflow-hidden">
                <NuxtImg format="avif" placeholder :src="currentImg" alt="portfolio pl image" class="hover:scale-105 transition-all duration-300"/>
            </div>
            <!-- <img :src="img_eng" alt="portfolio en image" class="w-full col-span-6 sm:col-span-3 lg:col-span-2 border-2 border-black p-4 bg-gray-100" /> -->
        </div>
        <div class="w-fit h-fit relative">
            <a :href="cv.src" target="_blank" rel="noopener">
                <div 
                    @mouseover="isLinkHovered = true" 
                    @mouseleave="isLinkHovered = false" 
                    :class="{ '-translate-y-[2px] -translate-x-[2px]': isLinkHovered }" 
                    class="relative bg-secondary z-10 text-white border border-black w-fit py-3 px-12 transition-all duration-300">
                    <p class="relative z-20 bg-secondary">{{ $t('cv.view') }}</p>
                </div>
            </a>
            <div 
                :class="{ 'translate-y-[2px] translate-x-[2px]': isLinkHovered }"
                class="absolute top-2 left-2 w-full h-full bg-gray-700 z-0 transition-all duration-300"></div>
        </div>
    </div>
</template>

<script setup>
    const { locale } = useI18n();
    const isLinkHovered = ref(false);
    const props = defineProps({
        cv: Object,
    });
    const emit = defineEmits(['click']);
    function handleClick() {
        emit('click');
    }
    const currentImg = computed(() => (locale.value === 'pl' ? props.cv.img_pl : props?.cv.img_eng));
</script>