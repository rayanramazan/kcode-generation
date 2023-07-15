<template>
  <navbar />
  <div class="w-full gap-4 items-start flex flex-row-reverse">
    <div class="w-full flex flex-col">
      <div class="py-4 flex justify-between lg:justify-end items-center px-4 rounded-md">

        <div class="flex items-center gap-4">
          <button class="block lg:hidden" @click="isOpen = !isOpen">
            <Icon name="gg:menu-left" class="w-6 h-6 text-white"/>
          </button>
        <div 
        dir="ltr"
        class="flex lg:hidden justify-center items-end gap-1 text-2xl lg:text-3xl font-bold text-white">
          <span>
            KCODE
          </span>
          <span class="text-white font-normal text-sm mb-[1.1px]">
            Generation
          </span>
          </div>
        </div>


        <ButtonLang class="btn_lang" />


      </div>
      <slot />
    </div>

    <div
      style="z-index: 9999;"
        :class="isOpen ? 'active' : ''"
        class="w-70 left-4 top-22 invisible lg:visible sm:w-96 h-0 absolute duration-300 lg:static lg:h-auto overflow-hidden p-4 lg:p-0 bg-[#222] lg:bg-transparent rounded-md lg:rounded-none border-1 lg:border-0 border-white/10">
      <sidebar class="mt-4 lg:mt-0"/>
    </div>

  </div>


  <NuxtLayout name="footer" />
</template>
<script setup lang="ts">
import sidebar from "~/layouts/sidebar.vue";
import Navbar from "~/layouts/navbar.vue";
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