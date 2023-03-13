<template>
  <div class="m-8 text-center">
    <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-white">KTOOLS</h1>
    <span class="text-white/70 text-sm sm:text-base">
    We’ve made a few other resources to help you with your design and development workflow.
  </span>
  </div>
  <div class="w-full flex gap-4 justify-center flex-wrap">
    <NuxtLink
    v-for="resource in resources"
    :key="resource"
    :to="`resource/${resource.slug}`"
    >
      <div
          class="w-96 h-50 bg-primary rounded-lg flex justify-center items-center filter hover:grayscale-50 transform hover:-translate-y-1 duration-300"
      >
        <h1 class="capitalize text-3xl text-white font-bold">{{ resource.slug.replace(/-/g, " ") }}</h1>
      </div>
    </NuxtLink>

  </div>
</template>
<script setup lang="ts">
const resources = await useResources()
</script>