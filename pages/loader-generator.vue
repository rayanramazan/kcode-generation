<template>
  <div 
    class="grid lg:grid-cols-2 gap-x-2 gap-y-3 mt-3">

    <div 
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3">
      <div     
      v-for="spinner in data['loader-generator']" 
      :key="spinner.id"
      v-html="spinner.html"
      @click="code = spinner.css"
      class="bg-[#222] h-40 flex justify-center items-center z-30 rounded border border-white/10 duration-300 hover:border-primary">
      </div>
    </div>

    <CodeEditor :code="code" />

  </div>
    
</template>

<script setup lang="ts">
const data = await useComponents()

const code = ref('')
</script>
