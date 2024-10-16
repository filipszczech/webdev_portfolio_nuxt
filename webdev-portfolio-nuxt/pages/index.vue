<template>
    <div class="">
        <section class="my-24">
            <h2 class="text-4xl font-bold mb-6 xl:mb-9 text-gray-700">MÓJ PROFIL</h2>
            <MyProfile />
        </section>
        <section class="mb-12">
            <h2 class="text-4xl font-bold mb-6 xl:mb-9 text-gray-700">PORTFOLIO</h2>
            <div v-if="projectsPending">Loading...</div>
            <div v-else-if="projectsError">{{ projectsError.message }}</div>
            <div v-else class="grid grid-cols-6 gap-9 xl:gap-16">
                <div v-for="(project, projectIndex) in projects" :key="projectIndex" class="w-full col-span-6 sm:col-span-3 lg:col-span-2">
                    <RealiztaionCard
                        :name="project.name"
                        :desc="project.desc"
                        :img="project.img"
                        :tools="project.tools" 
                    />
                </div>
            </div>
        </section>
        <section class="my-24">
            <h2 class="text-4xl font-bold mb-6 xl:mb-9 text-gray-700">KONTAKT</h2>
            <ContactForm />
        </section>
    </div>
</template>

<script setup>
import MyProfile from '~/components/MyProfile.vue';

    const { data: projects, pending: projectsPending, error: projectsError } = useAsyncData('projects', async () => {
        return await useSupabaseFetch('projects');
    });
</script>