<template>
  <div class="m-8 text-center">
    <h1 class="text-2xl font-bold text-white">KTOOLS</h1>
    <span class="text-white/70 ">
    We’ve made a few other resources to help you with your design and development workflow.
  </span>
  </div>
  <div class="w-full flex gap-4 justify-center flex-wrap">
    <NuxtLink
        v-for="resource in resources"
        :key="resource"
        :to="`resource/${resource.slug}`"
        class="relative group overflow-hidden"
    >
      <img
          class="w-full sm:w-full h-full object-cover rounded-lg sm:h-52 filter hover:blur-lg duration-300"
          :alt="resource.id"
          :srcset="`http://drive.google.com/uc?export=view&id=${resource.img}`"
          :src="`http://drive.google.com/uc?export=view&id=${resource.img}`" />

      <h1 class="w-full absolute -bottom-14 duration-300 group-hover:bottom-0 text-white text-2xl bg-gradient-to-t p-4 from-[#202020] to-transparent">
        Hello World
      </h1>
    </NuxtLink>

  </div>
</template>
<script setup lang="ts">
const resources = await useResources()
</script>