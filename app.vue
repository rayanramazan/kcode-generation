<script setup lang="ts">
import {AppSetup} from "~/utils/app";
const {t} = useLang()
const locale=  useState<string>('locale.setting')
AppSetup()
useHead({
  title: 'Page Title',
      meta: [
  { hid: 'description', name: 'description', content: 'Page description.' }
]
})
</script>
<template>
  <Body
      :dir="locale === 'EN_US' ? 'ltr' : 'rtl'"
      :class="locale === 'EN_US' ? 'english' : 'kurdish'"
      class="selection:bg-primary selection:text-light overflow-x-hidden bg-light scrollbar scrollbar-thumb-primary scrollbar-track-[#202020]"
  >

  <NuxtLayout name="header">

      <NuxtPage />
  </NuxtLayout>

  </Body>

</template>

<style>
@import './assets/css/style.css';
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

