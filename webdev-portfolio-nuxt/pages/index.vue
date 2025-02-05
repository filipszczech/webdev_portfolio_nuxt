<template>
    <div class="">
        <section id="profile_section" class="mt-8 sm:mt-12 mb-16 lg:mt-24 lg:mb-24">
            <div v-if="profileError">{{ profileError.message }}</div>
            <div v-else>
                <MyProfile
                    :profile="profile"
                />
            </div>
        </section>
        <section id="tech_stack" class="my-16 md:my-24">
            <TechStack />
        </section>
        <section id="portfolio_section" class="mb-16">
            <div
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600">
                <h2 class="section-title">{{ $t('section_titles.portfolio') }}</h2>
            </div>
            <!-- <div v-if="projectsPending">Loading...</div>
            <div v-else-if="projectsError">{{ projectsError.message }}</div> -->
            <div class="grid grid-cols-6 gap-9 xl:gap-16 grid-auto-rows-[minmax(0,_1fr)]">
                <div v-for="(project, projectIndex) in projects" :key="projectIndex" class="w-full col-span-6 sm:col-span-3 lg:col-span-2" 
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                    :duration="600" :delay="200*projectIndex">
                    <RealiztaionCard
                        @click="openProjectModal(project)"
                        :project="project"
                    />
                </div>
            </div>
            <div class="flex justify-center gap-2 items-center content-center mt-9"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600">
                <p class="text-lg text-center font-semibold dark:text-gray-400">{{ $t('portfolio.github') }}</p>
                <span>
                    <a href="https://github.com/filipszczech/" target="_blank" rel="noopener" class="">
                        <NuxtImg format="avif" placeholder alt="techstack icon" class="h-10" src="https://pngimg.com/uploads/github/github_PNG15.png"/>
                    </a>
                </span>
            </div>
        </section>
        <section id="cv_section" class="my-16 md:my-24" v-motion :initial="{ opacity: 0, y: 50,}" :visibleOnce="{ opacity: 1, y: 0, transition: {duration: 600, delay: 100}}">
            <h2 class="section-title">{{ $t('section_titles.cv') }}</h2>
            <div>
                <DownloadCv
                    @click="openCvModal"
                    :cv="cv"
                />
            </div>
        </section>
        <section id="contact_section" class="mt-16 md:mt-24 mb-24 lg:mb-32">
            <ContactForm />
        </section>
        <!-- toast -->
        <Toast v-for="toast in toasts" :key="toast.id" :message="toast.message" :duration="toast.duration" />
        <!-- scroll to top -->
        <ScrollToTop />
        <!-- modals -->
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
    const { locale } = useI18n();
    const { toasts } = useToast();

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

    const { data: projects, error: projectsError } = await useFetch('/api/projects');
    const { data: cv, error: cvError } = await useFetch('/api/cv-document');
    const { data: profile, error: profileError } = await useFetch('/api/profile');
    
    useHead({
        title: "Filip Szczęch | portfolio",
        meta: [
            { name: 'description', content: 'Web developer portfolio created in nuxt, including cv, skills and projects. (homepage)' }
        ],
        htmlAttrs: {
            lang: locale.value
        },
    });
</script>

<style scoped>
    h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>