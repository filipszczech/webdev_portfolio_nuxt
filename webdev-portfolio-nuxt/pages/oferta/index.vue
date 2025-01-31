<template>
    <div>
        <section class="md:text-lg mb-16 md:mb-24 text-gray-700 dark:text-gray-400">
            <h1 class="section-title uppercase">{{ $t('section_titles.offer') }}</h1>
            <p>{{ $t('offer.description_1') }}</p>
            <p class="font-semibold mt-6 mb-2">{{ $t('offer.offer_for') }}</p>
            <!-- <ul class="flex flex-col gap-1">
                <li v-for="p, in $tm('offer.offer_for_list')" :key="p">
                    {{ $rt(p) }}
                </li>
            </ul>
            <p class="font-semibold mt-6 mb-2">{{ $t('offer.offer_pros') }}</p>
            <ul class="flex flex-col gap-1">
                <li v-for="p, in $tm('offer.offer_pros_list')" :key="p">
                    <p v-html="$rt(p)"></p>
                </li>
            </ul> -->
            <ul class="flex flex-col gap-1">
                <li>🌱 Tworzą coś fajnego i chcą się <span class="text-red-500">zaprezentować</span></li>
                <li>🐾 Planują <span class="text-red-500">odświeżenie</span> swojej identyfikacji w sieci</li>
                <li>🌐 Są niezadowolone ze swojej <span class="text-red-500">obecnej</span> strony internetowej</li>
                <li>😡 Są obciążone kosztami prowadzenia biznesu i <span class="text-red-500">uciążliwymi subskrypcjami</span></li>
            </ul>
            <p class="font-semibold mt-6 mb-2">{{ $t('offer.offer_pros') }}</p>
            <ul class="flex flex-col gap-1">
                <li><span class="text-secondary">⚡ Najnowsze technologie</span> i szybkie działanie (bez Wordpressa i tego typu narzędzi)</li>
                <li><span class="text-secondary">🎨 Indywidualny</span> projekt graficzny</li>
                <li>📞 Skalowalność i <span class="text-secondary">wersję mobilną</span></li>
                <li>📈 Wysokie pozycjonowanie i dbałość o <span class="text-secondary">SEO</span></li>
                <li>🍬 Szereg dostępnych <span class="text-secondary">dodatków</span>: dark mode, wielojęzykowość, animacje, blog itd.</li>
                <li><span class="text-secondary">🎣 Pełną kontrolę nad treścią</span> i danymi z możliwością przekierowania tego na mnie</li>
                <li><span class="text-secondary">💰 Brak kosztów cyklicznych</span> (jedynie koszt domeny)</li>
                <li><span class="text-secondary">💬 Stały kontakt</span> i możliwość zmian w projekcie w przyszłości</li>
            </ul>
            <h2 class="section-title uppercase mt-12">{{ $t('section_titles.realizations') }}</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div v-for="project in projects" :key="project.id" class="">
                    <div class="border border-gray-700 overflow-hidden">
                        <NuxtImg :src="project.img" format="avif" placeholder :alt="'project:' + project.name" class="w-full h-96 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300" />
                    </div>
                    <p class="mt-3 font-semibold text-center">{{ project.name }}</p>
                </div>
            </div>
        </section>
        <section id="contact_section" class="mt-16 md:mt-24 mb-24 lg:mb-32">
            <OfferForm />
        </section>
        <!-- scroll to top -->
        <ScrollToTop />
        <Toast v-for="toast in toasts" :key="toast.id" :message="toast.message" :duration="toast.duration" />
    </div>
</template>

<script setup>
    const { toasts } = useToast();
    useHead({
        title: "Filip Szczęch | oferta",
        meta: [
            { name: 'description', content: 'Filip Szczęch portfolio - oferta wykonania stron internetowych.' },
            { property: 'og:description', content: 'Filip Szczęch portfolio - oferta wykonania stron internetowych.' },
        ],
        htmlAttrs: {
            lang: 'pl'
        },
    });
    const { data: projects, pending: projectsPending, error: projectsError } = useAsyncData('projects', async () => {
        return await useSupabaseFetch('projects');
    }); 
</script>

<style scoped>
    h1, h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>