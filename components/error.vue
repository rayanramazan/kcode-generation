<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="relative">
      <img
          src="../assets/img/404.png"
          alt="404"
          class="w-50 h-50 sm:w-70 sm:h-70 md:w-96 md:h-96"
          srcset="../assets/img/404.png">
      <div
          style="filter: blur(50px)"
        class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute bg-primary w-45 h-45"
      ></div>
    </div>
    <h1 class="text-white text-lg sm:text-2xl md:text-3xl">
      Can't find This page
    </h1>
    <button class="bg-primary text-white w-25 text-sm md:text-base p-1 md:p-2 mt-5 rounded transform hover:-translate-y-1 duration-300">
      Home
    </button>
  </div>
</template>