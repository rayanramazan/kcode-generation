<script setup lang="ts">
import {AppSetup} from "~/utils/app";
const {t} = useLang()
const locale=  useState<string>('locale.setting')
AppSetup()
</script>
<template>

  <Body
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
    {{ $t('title') }}
    <NuxtPage />


  </NuxtLayout>
  </Body>

</template>

<style>
@import './assets/css/style.css';
</style>

