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
  >
  <div class="area" >
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div >
  <NuxtLayout name="header">
    <NuxtPage />
  </NuxtLayout>

  </Body>

</template>

<style>
@import './assets/css/style.css';
</style>

