<template>
    <div class='relative z-10 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-400 text-gray-800 border-2 border-gray-700 dark:text-gray-700'>
      <form class='relative z-20 bg-gray-100 dark:bg-gray-400 grid grid-cols-2 gap-6 md:gap-9 p-6 md:p-9'>
        <input required name='name' placeholder='Imię *' type='name' class='p-3 bg-transparent border border-gray-700'/>
        <input required name='mail' placeholder='Email *' type='email' class='p-3 bg-transparent border border-gray-700'/>
        <textarea placeholder='Wiadomość' class='col-span-2 p-3 bg-transparent border border-gray-700'></textarea>
        <div class='relative bg-[#596ae8] text-white border border-black z-20 w-32'>
            <button class='bg-[#596ae8] py-2 w-full'>Wyślij</button>
            <div class='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
        </div>
      </form>
      <div
          class="absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out">
      </div>
    </div>
</template>

<script setup>

</script>