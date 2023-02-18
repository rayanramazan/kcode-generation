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
              max="255"
              v-model="range.value"
          />
        </div>
      </div>
      <div>
        <div
            :style="`
              background: rgb(${ranges[0].value}, ${ranges[1].value}, ${ranges[2].value})
              `"
            class="w-96 h-96">
        </div>
      </div>
    </div>
    <Output :data="`rgb(${ranges[0].value}, ${ranges[1].value}, ${ranges[2].value})`"
            stylesheet="background: "
    />
  </section>
</template>

<script setup>
import Output from "~/components/Output.vue";
const ranges = ref([
  {
    id: 1,
    title: 'Red',
    value: 59
  },
  {
    id: 2,
    title: 'Green',
    value: 166
  },
  {
    id: 3,
    title: 'Blue',
    value: 118
  },
])
</script>