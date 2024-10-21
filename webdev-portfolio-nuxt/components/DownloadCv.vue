<template>
    <div>
        <div class="grid grid-cols-6 gap-9 xl:gap-16 grid-auto-rows-[minmax(0,_1fr)] mb-9">
            <div @click="handleClick" class="w-full col-span-6 sm:col-span-3 lg:col-span-2 border-2 border-black p-4 bg-gray-100 cursor-pointer overflow-hidden">
                <img :src="currentImg" alt="portfolio pl image" class="hover:scale-105 transition-all duration-300"/>
            </div>
            <!-- <img :src="img_eng" alt="portfolio en image" class="w-full col-span-6 sm:col-span-3 lg:col-span-2 border-2 border-black p-4 bg-gray-100" /> -->
        </div>
        <div class='relative bg-secondary text-white border border-black z-20 w-32 text-lg'>
            <a :href="cv.src" target="_blank" class=' bg-secondary py-2 px-6 w-32'>Przejrzyj</a>
            <!-- <div class='absolute bg-gray-700 w-32 h-full left-[0.35rem] top-[0.35rem] -z-20'></div> -->
        </div>
    </div>
</template>

<script setup>
    const { locale } = useI18n();
    const props = defineProps({
        cv: Object,
    });
    const emit = defineEmits(['click']);
    function handleClick() {
        emit('click');
    }
    const currentImg = computed(() => (locale.value === 'pl' ? props.cv.img_pl : props?.cv.img_eng));
</script>