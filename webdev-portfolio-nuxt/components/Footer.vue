<template>
    <div>
        <footer>
            <div class="w-full bg-[#F1EEDB] dark:bg-gray-700 text-gray-800 border-t-2 border-black"
                v-motion
                :initial="{ opacity: 0 }"
                :visible="{ opacity: 1 }"
                :duration="600">
                <div class="max-w-7xl mx-auto py-6 xl:py-12">
                    <div class="flex justify-center gap-4 text-red-500 dark:text-secondary mb-3">
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
                    <p class="text-center dark:text-gray-400 px-6">Coded and designed by Filip Szczęch.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>