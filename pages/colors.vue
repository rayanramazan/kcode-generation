<template>

<div class="mt-26 mt-26 lg:mx-0 p-4">
  <span class="mt-8 text-xl md:text-2xl text-white font-bold">
  {{ $t('color-swatches') }}
</span>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 mt-3">

  <div 
    v-for="color in colors" :key="color.id"
    class="flex rounded relative shadow-lg min-h-[160px]">
    <div 
      :style="`background: ${color.primary}`"
      class="w-[50%] h-full"></div>
    <div 
      :style="`background-color: ${color.secondary}`"
      :class="`w-[50%] h-full`"></div>
    <div class="flex absolute justify-between w-full bottom-0">
      <span class="bg-primary px-3 py-2 rounded-tr-2xl text-white">
        {{ color.primary }}
      </span>
      <span class="bg-primary px-3 py-2 rounded-tl-2xl text-white">
        {{ color.secondary }}
      </span>
    </div>
  </div>

</div>

<Footer />

</div>


</template>

<script setup lang="ts">
const colors = await useColors()
</script>