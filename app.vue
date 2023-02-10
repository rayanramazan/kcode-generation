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
<script setup lang="ts">
const { t } = useLang()
</script>