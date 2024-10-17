<template>
    <div>
        <div class='relative bg-secondary text-white border border-black z-20 w-32 text-lg'>
            <a :href="src" target="_blank" class=' bg-secondary py-2 px-6 w-32'>Przejrzyj</a>
            <!-- <div class='absolute bg-gray-700 w-32 h-full left-[0.35rem] top-[0.35rem] -z-20'></div> -->
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        src: String,
        img_pl: String,
        img_eng: String,
    });
</script>