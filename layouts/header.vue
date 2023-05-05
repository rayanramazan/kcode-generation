<template>
  <div class="w-full gap-4 px-4 pt-4 items-start flex flex-row-reverse">
    <div class="w-full flex flex-col">
      <div class="py-4 flex justify-between lg:justify-end items-center px-4 bg-white/5 rounded-md border-1 border-white/10">

        <div class="flex items-center gap-4">
          <button class="block lg:hidden" @click="isOpen = !isOpen">
            <Icon name="gg:menu-left" class="w-6 h-6 text-white"/>
          </button>
        <div 
        dir="ltr"
        class="flex lg:hidden justify-center items-center gap-1 text-2xl lg:text-3xl font-bold">
          <span class="text-primary">
            K
          </span>
          <span class="text-white">
            TOOLS
          </span>
          </div>
        </div>


        <ButtonLang class="btn_lang" />

        <div class="flex head_social items-center gap-3 text-white">
          <ButtonLang />
          <hr class="mx-5 w-[0.5px] border-0 bg-white/10 h-8">
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

    <div
      style="z-index: 9999;"
        :class="isOpen ? 'active' : ''"
        class="w-70 left-4 top-22 invisible lg:visible sm:w-96 h-0 absolute duration-300 lg:static lg:h-auto overflow-hidden p-4 bg-[#222] lg:bg-white/5 rounded-md border-1 border-white/10">
      <div
          dir="ltr"
          :class="localeLanguage != 'EN_US' ? 'justify-end' : 'justify-start'"
          class="hidden lg:flex items-center gap-1 text-3xl font-bold">
        <span class="text-primary">
          K
        </span>
        <span class="text-white">
          TOOLS
        </span>
      </div>
      <hr class="hidden lg:block my-4 border-white/20">
      <sidebar class="mt-4 lg:mt-0"/>
    </div>

  </div>


  <NuxtLayout name="footer" />
</template>
<script setup lang="ts">
import Sidebar from "~/layouts/sidebar.vue";
const isOpen = ref(false)
const localeLanguage =  useState<string>('locale.setting')
</script>
<style>
.active{
  @apply h-screen visible
}
.head_social{
  @apply sm:flex hidden
}
.btn_lang{
  @apply sm:hidden block
}
</style>