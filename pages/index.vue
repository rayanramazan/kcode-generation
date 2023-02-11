<template>
  <section class="w-full">
    <div class="flex justify-between p-6">
      <div class="flex flex-col gap-6">
        <h1
            class="bg-white/5 rounded-md border-1 border-white/10 text-lg text-white p-2"
        >ڕێکخستنا رەنگان</h1>

        <div
            v-for="range in ranges"
            :key="range"
            class="w-80 flex flex-col gap-2">
          <span class="text-white">
            {{ range.title }}
            {{ range.value }}
          </span>
          <input
              class="rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full"
              type="range"
              min="0"
              max="100"
              v-model="range.value"
               />
        </div>

      </div>
      <div>
        <div class="w-96 h-96 bg-primary">

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const ranges = ref([
  {
    id: 1,
    title: 'Top Left Radius',
    value: 0
  },
  {
    id: 2,
    title: 'Top Right Radius',
    value: 0
  },
  {
    id: 3,
    title: 'Bottom Right Radius',
    value: 0
  },
  {
    id: 4,
    title: 'Bottom Left Radius',
    value: 0
  },
])
</script>