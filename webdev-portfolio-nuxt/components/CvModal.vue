<template>
    <div>
        <ModalContainer :isOpen="isCvModalOpen" @close="closeModal">
            <template #default>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 xl:mb-9 text-gray-700 dark:text-gray-400 uppercase">{{ $t('cv.modal_title') }}</h2>
                <img :src="currentImg" alt="CV" class="w-full" />
            </template>
        </ModalContainer>
    </div>
</template>

<script setup>
    const { locale } = useI18n();
    const props = defineProps({
        cv: Object,
        isCvModalOpen: Boolean
    });
    const emit = defineEmits(['close']);
    function closeModal() {
        emit('close');
    }
    const currentImg = computed(() => (locale.value === 'pl' ? props.cv.img_pl : props?.cv.img_eng));

</script>

<style scoped>
    h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>