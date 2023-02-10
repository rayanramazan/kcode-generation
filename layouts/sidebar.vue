<template>
  <ul class="flex flex-col gap-2 text-white">
    <li
        class="text-primary border-l-primary border-l-2 pl-2 font-bold">
      <NuxtLink
          to="">
        Home
      </NuxtLink>
    </li>
    <li
        class="pl-2 font-bold">
      <NuxtLink
          to="">
        Components
      </NuxtLink>
    </li>
    <li
        class="pl-2 font-bold">
      <NuxtLink
          to="">
        Resources
      </NuxtLink>
    </li>
    <li
        class="pl-2 font-bold">
      <NuxtLink
          to="">
        Contact Us
      </NuxtLink>
    </li>
    <hr class="my-4 border-white/10">
    <li v-for="page in pages" class="pl-2">
      <span class="mb-2 font-bold">
        {{ page.title[localeLanguage] }}
      </span>
      <ul class="flex flex-col mt-3 gap-2">
        <li v-for="child in page.children">
          <NuxtLink class="ml-2 text-base">
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
</script>