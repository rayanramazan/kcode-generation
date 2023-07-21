<template>

<div class="mt-26 lg:p-0 p-4">
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

<div class="flex justify-between sm:flex-row flex-col-reverse sm:gap-0 gap-4 items-center text-white/50 lg:mr-4 mt-20 mb-6">
        <div class="flex items-center gap-x-1">
            <span>KCODE Generation </span>
            <Icon name="uil:copyright" class="w-6 h-6"/>
            <span>by</span>
            <NuxtLink to="/" class="hover:text-white transition-all duration-300">
                Rayan Ramazan
            </NuxtLink>
        </div>
        <div class="flex items-center gap-4">
            <NuxtLink to="/privacy-policy" class="hover:text-white transition-all duration-300">
                <Icon name="ph:github-logo" class="w-7 h-7"/>
            </NuxtLink>
            <NuxtLink to="/privacy-policy" class="hover:text-white transition-all duration-300">
                <Icon name="ph:facebook-logo" class="w-7 h-7"/>
            </NuxtLink>
            <NuxtLink to="/privacy-policy" class="hover:text-white transition-all duration-300">
                <Icon name="ph:instagram-logo" class="w-7 h-7"/>
            </NuxtLink>
            <NuxtLink to="/privacy-policy" class="hover:text-white transition-all duration-300">
                <Icon name="ph:linkedin-logo" class="w-7 h-7"/>
            </NuxtLink>
        </div>
    </div>

</div>


</template>

<script setup lang="ts">
const colors = await useColors()
</script>