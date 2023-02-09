<template>
  <div class="w-full gap-4 px-4 pt-4 items-start flex flex-row-reverse">

    <div class="w-full flex flex-col">
      <div class="py-4 flex justify-between lg:justify-end items-center px-4 bg-white/5 rounded-md border-1 border-white/10">
        <button class="hidden">
          <Icon name="gg:menu-left" class="w-7 h-7 text-white"/>
        </button>

        <ButtonLang />
        <hr class="mx-5 w-[0.5px] bg-white/10 h-8">
        <div class="flex items-center gap-3 text-white">
          <NuxtLink to="">
            <Icon
                class="w-6 h-6 transform hover:-translate-y-1 cursor-pointer duration-300"
                name="ion:logo-instagram" />
          </NuxtLink>
          <NuxtLink to="">
            <Icon
                class="w-6 h-6 transform hover:-translate-y-1 cursor-pointer duration-300"
                name="ion:social-facebook" />
          </NuxtLink>
          <NuxtLink to="">
            <Icon
                class="w-6 h-6 transform hover:-translate-y-1 cursor-pointer duration-300"
                name="ion:logo-github" />
          </NuxtLink>
          <NuxtLink to="">
            <Icon
                class="w-6 h-6 transform hover:-translate-y-1 cursor-pointer duration-300"
                name="ion:logo-twitter" />
          </NuxtLink>
          <NuxtLink to="">
            <Icon
                class="w-6 h-6 transform hover:-translate-y-1 cursor-pointer duration-300"
                name="ion:logo-linkedin" />
          </NuxtLink>
        </div>

      </div>
      <slot />
    </div>

    <div class="w-[20%] p-4 bg-white/5 rounded-md border-1 border-white/10">
      <div class="flex justify-center items-center gap-1 text-3xl font-bold">
        <span class="text-primary">
          K
        </span>
        <span class="text-white">
          TOOLS
        </span>
      </div>
      <hr class="my-4 border-white/20">
      <sidebar />
    </div>

  </div>


  <NuxtLayout name="footer" />
</template>
<script setup lang="ts">
import Sidebar from "~/layouts/sidebar.vue";
</script>