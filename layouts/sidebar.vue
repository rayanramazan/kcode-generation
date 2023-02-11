<template>
  <ul class="flex flex-col gap-2 text-white">
    <li
        class="text-primary border-l-primary border-l-2 px-2 font-bold">
      <NuxtLink
          to="">
        {{ $t('home') }}
      </NuxtLink>
    </li>
    <li
        class="px-2 font-bold hover:text-primary duration-300 cursor-pointer">
      <NuxtLink
          to="">
        {{ $t('components') }}
      </NuxtLink>
    </li>
    <li
        class="px-2 font-bold hover:text-primary duration-300 cursor-pointer">
      <NuxtLink
          to="">
        {{ $t('resources') }}
      </NuxtLink>
    </li>
    <li
        class="px-2 font-bold hover:text-primary duration-300 cursor-pointer">
      <NuxtLink
          to="">
        {{ $t('contact') }}
      </NuxtLink>
    </li>
    <hr class="my-4 border-white/10">
    <li v-for="page in pages" class="pl-2">
      <span class="mb-2 font-bold">
        {{ page.title[localeLanguage] }}
      </span>
      <ul class="flex flex-col mt-3 gap-2">
        <li v-for="child in page.children">
          <NuxtLink class="mx-2 text-base hover:text-primary duration-300 cursor-pointer">
            {{ child.titlePage[localeLanguage] }}
          </NuxtLink>
        </li>
      </ul>
      <hr class="my-4 border-white/10">
    </li>
  </ul>
</template>

<script setup lang="ts">
const localeLanguage =  useState<string>('locale.setting')
const pages = await usePage()
const {t} = useLang()
</script>