<template>
  <ul class="flex flex-col gap-2 px-4 lg:px-8 pt-4 pb-20 text-white lg:h-screen lg:overflow-y-auto lg:fixed lg:w-70 scrollbar-sidebar scrollbar scrollbar-track-[#202020]">
      <li class="px-2 font-normal hover:text-[#C147E9] duration-300 cursor-pointer">
      <NuxtLink
          class="duration-300"
          exact-active-class="active" active-class="active"
          :to="localePath('/')">
        {{ $t('home') }}
      </NuxtLink>
    </li>
    <li
        class="px-2 font-normal hover:text-[#C147E9] duration-300 cursor-pointer">
      <NuxtLink
          exact-active-class="active" active-class="active"
          :to="localePath('resource')">
        {{ $t('resources') }} 
      </NuxtLink>
    </li>
    <li
        class="px-2 font-normal hover:text-[#C147E9] duration-300 cursor-pointer">
      <NuxtLink
          exact-active-class="active" active-class="active"
          :to="localePath('contact')">
        {{ $t('contact') }}
      </NuxtLink>
    </li>
    <hr class="my-4 border-white/0">
    <li v-for="page in pages" class="pl-2" :key="page.id">
      <span class="mb-2 font-bold">
        {{ page.title[localeLanguage] }}
      </span>
      <ul class="flex flex-col mt-3 gap-2">
        <li v-for="child in page.children" :key="child.id">
          <NuxtLink
              :to="localePath(child.slug)"
              exact-active-class="active" active-class="active"
              class="mx-2 text-base font-normal hover:text-[#C147E9] duration-300 cursor-pointer">
            {{ child.titlePage[localeLanguage] }}
          </NuxtLink>
        </li>
      </ul>
      <hr class="my-4 border-white/0">
    </li>
  </ul>
</template>

<script setup lang="ts">
const localeLanguage =  useState<string>('locale.setting')
const pages = await usePage()
const {t} = useLang()
</script>

<style>
.scrollbar-sidebar::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-sidebar::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #371F36;
}
</style>