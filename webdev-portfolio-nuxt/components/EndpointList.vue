<template>
    <div class="flex flex-col gap-6">
        <h2>{{ $t('about.project_info.endpoint_list') }}</h2>
        <EndpointListElement
            :exampleData="projects[0]"
            endpointType="GET"
            endpointPath="/projects" />
        <EndpointListElement
            :exampleData="cv"
            endpointType="GET"
            endpointPath="/cv-documents" />
        <EndpointListElement
            :exampleData="profile"
            endpointType="GET"
            endpointPath="/profiles" />
    </div>
  </template>
  
  <script setup>
    const { data: projects, pending: projectsPending, error: projectsError } = useAsyncData('projects', async () => {
        return await useSupabaseFetch('projects');
    });
    
    const { data: cv, pending: cvPending, error: cvError } = await useAsyncData('cv_document', () =>
        useSupabaseFetch('cv_documents', { active: true }, true)
    );
    const { data: profile, pending: profilePending, error: profileError } = await useAsyncData('profile', () =>
        useSupabaseFetch('profiles', { active: true }, true)
    );
  </script>
  
<style scoped>
    h1, h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>
  