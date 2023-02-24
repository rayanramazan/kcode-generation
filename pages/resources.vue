<template>
  <div class="w-full flex gap-4 my-8 justify-center flex-wrap">
    <NuxtLink
    v-for="resource in resources"
    :key="resource"
    :to="`resource/${resource.slug}`"
    >
      <img
          class="w-full sm:w-full h-full object-cover rounded-lg sm:h-52 filter hover:grayscale-50 transform hover:-translate-y-1 duration-300"
          :alt="resource.id"
          :srcset="`http://drive.google.com/uc?export=view&id=${resource.img}`"
          :src="`http://drive.google.com/uc?export=view&id=${resource.img}`" />
    </NuxtLink>

  </div>
</template>
<script setup lang="ts">
const resources = await useResources()
</script>