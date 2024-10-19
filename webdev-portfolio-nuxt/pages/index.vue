<template>
    <div class="">
        <section id="profile_section" class="mt-12 mb-16 lg:mt-24 lg:mb-24">
            <MyProfile />
        </section>
        <section id="tech_stack" class="my-16 md:my-24">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 xl:mb-9 text-gray-700 dark:text-gray-400">{{ $t('section_titles.tech_stack') }}</h2>
            <TechStack />
        </section>
        <section id="portfolio_section" class="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 xl:mb-9 text-gray-700 dark:text-gray-400">{{ $t('section_titles.portfolio') }}</h2>
            <div v-if="projectsPending">Loading...</div>
            <div v-else-if="projectsError">{{ projectsError.message }}</div>
            <div v-else class="grid grid-cols-6 gap-9 xl:gap-16 grid-auto-rows-[minmax(0,_1fr)]">
                <div v-for="(project, projectIndex) in projects" :key="projectIndex" class="w-full col-span-6 sm:col-span-3 lg:col-span-2">
                    <RealiztaionCard
                        @click="openProjectModal(project)"
                        :name="project.name"
                        :desc="project.desc"
                        :name_en="project.name_en"
                        :desc_en="project.desc_en"
                        :img="project.img"
                        :tools="project.tools" 
                    />
                </div>
            </div>
        </section>
        <section id="tech_stack" class="my-16 md:my-24">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 xl:mb-9 text-gray-700 dark:text-gray-400">{{ $t('section_titles.cv') }}</h2>
            <div v-if="cvPending">Loading...</div>
            <div v-else-if="cvError">{{ cvError.message }}</div>
            <div v-else>
                <DownloadCv
                    @click="openCvModal"
                    :cv="cv"
                />
            </div>
        </section>
        <section id="contact_section" class="mt-16 md:mt-24 mb-24">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 xl:mb-9 text-gray-700 dark:text-gray-400">{{ $t('section_titles.contact') }}</h2>
            <ContactForm />
        </section>
        <RealizationModal 
            v-if="isProjectModalOpen" 
            :project="selectedProject" 
            :isProjectModalOpen="isProjectModalOpen" 
            @close="closeProjectModal" />
        <CvModal
            v-if="isCvModalOpen"
            :cv="cv"
            :isCvModalOpen="isCvModalOpen"
            @close="closeCvModal"
            />
    </div>
</template>

<script setup>
    const isProjectModalOpen = ref(false);
    const isCvModalOpen = ref(false);
    const selectedProject = ref(null);

    function openCvModal() {
        isCvModalOpen.value = true;
    }
    function closeCvModal() {
        isCvModalOpen.value = false;
    }

    function openProjectModal(project) {
        selectedProject.value = project;
        isProjectModalOpen.value = true;
    }
    const closeProjectModal = () => {
        selectedProject.value = null;
        isProjectModalOpen.value = false;
    }

    const { data: projects, pending: projectsPending, error: projectsError } = useAsyncData('projects', async () => {
        return await useSupabaseFetch('projects');
    });
    const { data: cv, pending: cvPending, error: cvError } = await useAsyncData('cv_document', () =>
        useSupabaseFetch('cv_documents', { active: true }, true)
    );
</script>

<style scoped>
    h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>