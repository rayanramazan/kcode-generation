<template>
   
  <div 
    class="grid md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 mt-3">
    <div     
    v-for="spinner in data.spinner" 
    :key="spinner.id"
    v-html="spinner.html"
    class="bg-[#222] h-40 flex justify-center items-center z-30 rounded border border-white/10 duration-300 hover:border-primary">
  </div>
  </div>
    
</template>

<script setup lang="ts">
const data = await useComponents()
</script>
