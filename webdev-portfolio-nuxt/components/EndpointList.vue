<template>
    <div class="flex flex-col gap-6">
        <h2>{{ $t('about.project_info.endpoint_list') }}</h2>
        <EndpointListElement
            :exampleData="realizations[0]"
            endpointType="GET"
            endpointPath="/realizations" />
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
    const { data: projects, error: projectsError } = await useFetch('/api/projects');
    const { data: realizations, error: realizationsError } = await useFetch('/api/realizations');
    const { data: cv, error: cvError } = await useFetch('/api/cv-document');
    const { data: profile, error: profileError } = await useFetch('/api/profile');
  </script>
  
<style scoped>
    h1, h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>
  