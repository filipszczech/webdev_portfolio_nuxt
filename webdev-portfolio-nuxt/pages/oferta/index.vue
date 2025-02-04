<template>
    <div>
        <section class="md:text-lg mb-16 md:mb-24 text-gray-700 dark:text-gray-400">
            <div
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :leave="{ opacity: 0, y: 50 }"
                :duration="600">
                <h1 class="section-title uppercase">{{ $t('section_titles.offer') }}</h1>
                <p class="xl:max-w-[75%]">{{ $t('offer.description_1') }}</p>
            </div>
            <ul class="flex flex-col gap-1 mt-6"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600"
                :delay="200">
                <p class="font-semibold mb-1">{{ $t('offer.offer_for') }}</p>
                <li>
                    {{ $t('offer.offer_for_list.item1_start') }} 
                    <span class="text-red-500">{{ $t('offer.offer_for_list.item1_highlight') }}</span>
                </li>
                <li>
                    {{ $t('offer.offer_for_list.item2_start') }} 
                    <span class="text-red-500">{{ $t('offer.offer_for_list.item2_highlight') }}</span> 
                    {{ $t('offer.offer_for_list.item2_end') }}
                </li>
                <li>
                    {{ $t('offer.offer_for_list.item3_start') }} 
                    <span class="text-red-500">{{ $t('offer.offer_for_list.item3_highlight') }}</span> 
                    {{ $t('offer.offer_for_list.item3_end') }}
                </li>
                <li>
                    {{ $t('offer.offer_for_list.item4_start') }} 
                    <span class="text-red-500">{{ $t('offer.offer_for_list.item4_highlight') }}</span>
                </li>
            </ul>
            <ul class="flex flex-col gap-1 mt-6"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600"
                :delay="400">
                <p class="font-semibold mt-6 mb-1">{{ $t('offer.offer_pros') }}</p>
                <li>
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item1_highlight') }}</span>
                    {{ $t('offer.offer_pros_list.item1_end') }}
                </li>
                <li>
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item2_highlight') }}</span>
                    {{ $t('offer.offer_pros_list.item2_end') }}
                </li>
                <li>
                    {{ $t('offer.offer_pros_list.item3_start') }} 
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item3_highlight') }}</span>
                </li>
                <li>
                    {{ $t('offer.offer_pros_list.item4_start') }} 
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item4_highlight') }}</span>
                </li>
                <li>
                    {{ $t('offer.offer_pros_list.item5_start') }}
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item5_highlight') }}</span>
                    {{ $t('offer.offer_pros_list.item5_end') }}
                </li>
                <li>
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item6_highlight') }}</span>
                    {{ $t('offer.offer_pros_list.item6_end') }}
                </li>
                <li>
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item7_highlight') }}</span>
                    {{ $t('offer.offer_pros_list.item7_end') }}
                </li>
                <li>
                    <span class="text-secondary">{{ $t('offer.offer_pros_list.item8_highlight') }}</span>
                    {{ $t('offer.offer_pros_list.item8_end') }}
                </li>
            </ul>
            <div class="mt-12"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :duration="600">
                <h2 class="section-title uppercase">{{ $t('section_titles.realizations') }}</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div v-for="(realization, realizationIndex) in realizations" :key="realization.id" class=""
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                    :duration="600" :delay="200*realizationIndex">
                    <div class="border border-gray-700 overflow-hidden">
                        <a :href="realization.link" target="_blank" rel="noopener" :aria-label="'realization page: ' + realization.name">
                            <NuxtImg :src="realization.img" format="avif" placeholder :alt="'realization: ' + realization.name" class="w-full h-96 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300" />
                        </a>
                    </div>
                    <a :href="realization.link" target="_blank" rel="noopener" :aria-label="'realization page: ' + realization.name">
                        <p class="mt-3 font-semibold text-center">{{ realization.name }}</p>
                    </a>
                </div>
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
    const { data: realizations, pending: realizationsPending, error: realizationsError } = useAsyncData('realizations', async () => {
        return await useSupabaseFetch('realizations');
    }); 
</script>

<style scoped>
    h1, h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>