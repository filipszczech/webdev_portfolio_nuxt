<template>
        <div class="grid grid-cols-3 gap-9 xl:gap-16">
        <div class="col-span-3 lg:col-span-2 flex flex-col gap-6 text-base lg:text-lg xl:pr-16 dark:text-gray-400">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-400">{{ $t('section_titles.my_profile') }}</h2>
            <div>
                <h3 class="font-semibold">{{ $t('profile.experience.title') }}</h3>
                <p>{{ $t('profile.experience.position') }}</p>
                <p>{{ $t('profile.experience.company') }}</p>
                <p>{{ $t('profile.experience.period') }}</p>
            </div>
            <div>
                <h3 class="font-semibold">{{ $t('profile.education.title') }}</h3>
                <p>{{ $t('profile.education.degree') }}</p>
                <p>{{ $t('profile.education.field') }}</p>
                <p>{{ $t('profile.education.period') }}</p>
            </div>
            <div>
                <h3 class="font-semibold">{{ $t('profile.skills.title') }}</h3>
                <p>{{ $t('profile.skills.desc') }}</p>
            </div>
            <div>
                <h3 class="font-semibold">{{ $t('profile.interests.title') }}</h3>
                <p>{{ $t('profile.interests.desc') }}</p>
            </div>
        </div>
        <div class="col-span-3 lg:col-span-1 h-fit w-fit bg-gray-100 dark:bg-gray-400 p-4 border-2 border-gray-700">
            <NuxtImg format="avif" placeholder src="https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/botaniczny/ob8.jpg" />
            <div class="flex gap-4 justify-center mt-4 text-red-500">
                <a href="https://github.com/filipszczech/" target="_blank" class="transition-all duration-300 hover:scale-110">
                    <Icon name="mdi:github" size="2.5rem" />
                </a>
                <a href="https://www.linkedin.com/in/filip-szcz%C4%99ch-678262234/" target="_blank" class="transition-all duration-300 hover:scale-110">
                    <Icon name="mdi:linkedin" size="2.5rem" />
                </a>
                <a href="https://www.instagram.com/gluciakpl/" target="_blank" class="transition-all duration-300 hover:scale-110">
                    <Icon name="mdi:instagram" size="2.5rem" />
                </a>
            </div>
        </div>
        </div>
  </template>
  

<script setup>

</script>

<style scoped>
    h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>