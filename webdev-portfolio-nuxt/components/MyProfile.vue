<template>
        <div class="grid grid-cols-3 gap-9 xl:gap-16">
        <div class="col-span-2 flex flex-col gap-6 text-lg xl:pr-16 dark:text-gray-400">
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
        <div class="h-fit bg-gray-100 dark:bg-gray-400 p-4 border-2 border-gray-700">
            <NuxtImg format="avif" placeholder src="https://invicpjbigavhuttylvh.supabase.co/storage/v1/object/public/photo-portfolio/botaniczny/ob8.jpg" />
        </div>
        </div>
  </template>
  

<script setup>

</script>