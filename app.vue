<script setup lang="ts">
import {AppSetup} from "~/utils/app";
const {t} = useLang()
const locale=  useState<string>('locale.setting')
AppSetup()
useHead( {
  title: 'KCODE',
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {hid: 'description', name: 'description', content: 'This is the meta description for this page.'},
    {charset: 'utf-8'},
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%233ba676%22></rect><path fill=%22%23fff%22 d=%22M60.62 74.93L37.67 51.17L37.67 77.18Q37.13 77.36 36.23 77.58Q35.33 77.81 34.25 77.81L34.25 77.81Q30.29 77.81 30.29 74.48L30.29 74.48L30.29 22.73Q30.74 22.55 31.69 22.32Q32.63 22.10 33.71 22.10L33.71 22.10Q37.67 22.10 37.67 25.43L37.67 25.43L37.67 47.84L62.42 22.19Q64.76 22.28 65.93 23.36Q67.10 24.44 67.10 25.88L67.10 25.88Q67.10 27.05 66.47 28.04Q65.84 29.03 64.67 30.20L64.67 30.20L45.23 49.28Q53.42 57.29 59.41 63.54Q65.39 69.80 69.71 73.67L69.71 73.67Q69.53 75.65 68.50 76.77Q67.46 77.90 65.84 77.90L65.84 77.90Q64.31 77.90 63.09 77.05Q61.88 76.19 60.62 74.93L60.62 74.93Z%22></path></svg>'},
  ]
} )
</script>
<template>
  <Body
      :dir="locale === 'EN_US' ? 'ltr' : 'rtl'"
      :class="locale === 'EN_US' ? 'english' : 'kurdish'"
      class="selection:bg-primary selection:text-light overflow-x-hidden bg-light scrollbar scrollbar-thumb-primary scrollbar-track-[#202020]"
  >

  <div class="landing-page">
  <NuxtLayout name="header">
      <NuxtPage  class=" z-30"/>
  </NuxtLayout>
  </div>

  </Body>

</template>

<style>
@import './assets/css/style.css';
@import './assets/css/loader-generator.css';
</style>

