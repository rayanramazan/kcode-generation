<template>
  <div class="mt-26 lg:p-0 p-4">
    <span class="mt-8 text-xl md:text-2xl text-white font-bold">
      {{ $t('color-swatches') }}
    </span>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 mt-3">

      <div v-for="gradient in gradients" :key="gradient.id"
        class="flex rounded relative shadow-lg min-h-[160px] group overflow-hidden" style="z-index: 1000;">
        <div :style="`background: linear-gradient(270deg,${gradient.first_color} 0%,${gradient.second_color} 100%);`"
          class="w-full h-full group-hover:brightness-50 filter duration-500"></div>
        <div class="flex absolute justify-center w-full -bottom-16 group-hover:bottom-0 duration-300">
          <span class="bg-gradient-to-r from-primary to-[#111] px-3 py-2 text-white text-center text-sm w-full">
            background: linear-gradient(270deg,{{ gradient.first_color }}0%,{{ gradient.second_color }} 100%);
          </span>
        </div>
        <button class="flex absolute justify-end pr-2  w-full -top-16 group-hover:top-2 duration-300 ">
          <span class="bg-gradient-to-r from-secondary to-primary px-3 py-2 text-white text-center text-sm rounded-lg flex items-center gap-1 cursor-pointer">
            <span>Copy</span>
            <Icon name="solar:copy-broken" class="w-5 h-5" />
          </span>
        </button>
      </div>

    </div>

    <Footer />
  </div>
</template>
  
<script setup lang="ts">
const gradients = await useGradients()
</script>