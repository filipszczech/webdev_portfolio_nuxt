<template>
        <div class="grid grid-cols-3 gap-9 xl:gap-16">
        <div class="col-span-3 lg:col-span-2 flex flex-col gap-6 text-base lg:text-lg xl:pr-16 dark:text-gray-400">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-400">{{ $t('section_titles.my_profile') }}</h1>
            <div>
                <h2 class="font-semibold">{{ $t('profile.experience.title') }}</h2>
                <div v-for="(exp, index) in currentExperience" :key="index">
                    <p>{{ exp.position }}</p>
                    <p>{{ exp.company }}</p>
                    <p>{{ exp.from }} - {{ exp.to }}</p>
                </div>
            </div>
            <div>
                <h2 class="font-semibold">{{ $t('profile.education.title') }}</h2>
                <div v-for="(edu, index) in currentEducation" :key="index">
                    <p>{{ edu.level }}</p>
                    <p>{{ edu.field }}</p>
                    <p>{{ edu.from }} - {{ edu.to }}</p>
                </div>
            </div>
            <div>
                <h2 class="font-semibold">{{ $t('profile.skills.title') }}</h2>
                <p>{{ currentSkills.join(', ') }}</p>
            </div>
            <div>
                <h2 class="font-semibold">{{ $t('profile.interests.title') }}</h2>
                <p>{{ currentInterests.join(', ') }}</p>
            </div>
        </div>
        <div class="col-span-3 lg:col-span-1 h-fit w-fit bg-gray-100 dark:bg-gray-400 p-4 border-2 border-gray-700">
            <NuxtImg format="avif" placeholder alt="Filip Szczęch profile picture" :src="profile.img" class="transition-all duration-300" />
            <div class="flex gap-4 justify-center mt-4 text-red-500 dark:text-secondary">
                <a href="https://github.com/filipszczech/" target="_blank" rel="noopener" aria-label="Filip Szczęch GitHub Profile" class="transition-all duration-300 hover:scale-110">
                    <Icon name="mdi:github" size="2.5rem" />
                </a>
                <a href="https://www.linkedin.com/in/filip-szcz%C4%99ch-678262234/" target="_blank" rel="noopener" aria-label="Filip Szczęch Linkedin Profile" class="transition-all duration-300 hover:scale-110">
                    <Icon name="mdi:linkedin" size="2.5rem" />
                </a>
                <a href="https://www.instagram.com/gluciakpl/" target="_blank" rel="noopener" aria-label="Filip Szczęch Instagram Profile" class="transition-all duration-300 hover:scale-110">
                    <Icon name="mdi:instagram" size="2.5rem" />
                </a>
            </div>
        </div>
        </div>
  </template>
  

<script setup>
    const props = defineProps({
        profile: Object,
    });
    const { locale } = useI18n();

    const currentExperience = computed(() => (locale.value === 'pl' ? props.profile.experience : props?.profile.experience_en));
    const currentEducation = computed(() => (locale.value === 'pl' ? props.profile.education : props?.profile.education_en));
    const currentSkills = computed(() => (locale.value === 'pl' ? props.profile.skills : props?.profile.skills_en));
    const currentInterests = computed(() => (locale.value === 'pl' ? props.profile.interests : props?.profile.interests_en));
</script>

<style scoped>
    h1 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>