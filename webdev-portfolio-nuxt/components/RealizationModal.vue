<template>
    <div>
        <ModalContainer :isOpen="isProjectModalOpen" @close="closeModal">
            <template #default>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-700 dark:text-gray-400 uppercase">{{ currentName }}</h2>
                <p>{{ currentDesc }}</p>
                <NuxtImg format="avif" placeholder :src="project.img" alt="Project image" class="my-6 w-3/4 mx-auto" />
                <p class="font-semibold">{{ $t('portfolio.modal_tasks') }}</p>
                <p class="mb-4">{{ currentTasks }}</p>
                <div class="mb-4">
                    <p class="font-semibold">{{ $t('portfolio.modal_tech_stack') }}</p>
                    <span v-for="(tool, index) in project.tools" :key="tool" class=''>
                        {{ tool }}<span v-if="index < project.tools.length - 1">, </span>
                    </span>
                </div>
                <div v-if="project.other_tools" class="mb-4">
                    <p class="font-semibold">{{ $t('portfolio.modal_other_tools') }}</p>
                    <span v-for="(tool, index) in project.other_tools" :key="tool" class=''>
                        {{ tool }}<span v-if="index < project.other_tools.length - 1">, </span>
                    </span>
                </div>
                <div v-if="project.link">
                    <p class="font-semibold">{{ $t('portfolio.modal_link') }}</p>
                    <a :href="project.link" target="_blank" class="w-fit">
                        <p class="underline w-fit">{{ currentName }}</p>
                    </a>
                </div>
            </template>
        </ModalContainer>
    </div>
</template>

<script setup>
    const { locale } = useI18n();
    const props = defineProps({
        project: Object,
        isProjectModalOpen: Boolean
    });
    const emit = defineEmits(['close']);
    function closeModal() {
        emit('close');
    }
    const currentName = computed(() => (locale.value === 'pl' ? props.project.name : props?.project.name_en));
    const currentDesc = computed(() => (locale.value === 'pl' ? props.project.desc : props?.project.desc_en));
    const currentTasks = computed(() => (locale.value === 'pl' ? props.project.tasks : props?.project.tasks_en));

</script>

<style scoped>
    h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>