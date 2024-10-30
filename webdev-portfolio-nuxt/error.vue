<template>
    <div class="font-mono bg-primary dark:bg-black min-h-screen text-gray-700 dark:text-gray-400">
        <div class="mx-auto max-w-7xl text-center px-8 py-12">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Status błędu: {{ error.statusCode }}</h1>
            <div class="flex flex-col gap-3">
                <p class="font-bold text-xl md:text-2xl">Wystąpił błąd! :(</p>
                <p v-if="error.statusCode === 404" class="font-bold text-xl md:text-2xl">Podana strona nie istnieje.</p>
                <p class="mb-6 text-xl md:text-2xl"><b>Treść błędu:</b> {{ error.message }}</p>
                <!-- <div @click="handleClearError" class="">/ powrót do strony głównej</div> -->
                <AnimatedButton text="powrót do strony głównej" @click="handleClearError" class="mx-auto" />
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = () => clearError({ redirect: '/' });
</script>