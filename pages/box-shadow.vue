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
          </span>
          <input
              class="rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full"
              type="range"
              :min="range.min"
              :max="range.max"
              :step="range.steps"
              v-model="range.value"
          />
        </div>

      </div>
      <div>
        <div
            :style="`
              box-shadow: ${ranges[0].value}px ${ranges[1].value}px ${ranges[2].value}px rgba(255, 255, 255, ${ranges[3].value});
              `"
            class="w-96 h-96 bg-primary">
        </div>
      </div>
    </div>
    <Output :data="`${ranges[0].value}px ${ranges[1].value}px ${ranges[2].value}px rgba(255, 255, 255, ${ranges[3].value})`"
            stylesheet="text-shadow:"
    />
  </section>
</template>

<script setup>
import Output from "~/components/Output.vue";

const ranges = ref([
  {
    id: 1,
    title: 'Top Left Radius',
    value: 4,
    min: -200,
    max: 200,
    steps: 1
  },
  {
    id: 2,
    title: 'Top Right Radius',
    value: 4,
    min: -200,
    max: 200,
    steps: 1
  },
  {
    id: 3,
    title: 'Bottom Right Radius',
    value: 2,
    min: 0,
    max: 400,
    steps: 1
  },
  {
    id: 4,
    title: 'Bottom Left Radius',
    value: 0.6,
    min: 0,
    max: 1,
    steps: 0.01
  },
])
</script>