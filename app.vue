<script setup lang="ts">
import {AppSetup} from "~/utils/app";
const {t} = useLang()
const locale=  useState<string>('locale.setting')
AppSetup()
</script>
<template>

  <Body>
  <NuxtLayout name="header">
    {{ $t('title') }}
    <NuxtPage />
  </NuxtLayout>
  </Body>

</template>

<style>
@import './assets/css/style.css';
</style>
