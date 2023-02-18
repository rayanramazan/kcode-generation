<template>
  <section class="w-full">
    <div class="flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4">
      <div class="flex flex-col gap-6">
        <h1
            class="bg-white/5 rounded-md border-1 border-white/10 text-lg text-white p-2"
        >ڕێکخستنا رەنگان</h1>

        <div
            v-for="range in ranges"
            :key="range"
            class="w-full md:w-80 flex flex-col gap-2">
          <span class="text-white">
            {{ range.title }}
          </span>
          <input
              class="rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full"
              type="range"
              :min="range.min"
              :max="range.max"
              :step="range.step"
              v-model="range.value"
          />
        </div>
      </div>
      <div>
        <div
            :style="`
              transform: rotate(${ranges[0].value}deg)
               scale(${ranges[1].value})
               skew(${ranges[2].value}deg)
               translate(${ranges[3].value}px , ${ranges[4].value}px)
              `"
            class="w-full md:w-96 h-96 bg-primary">
        </div>
      </div>
    </div>
    <Output :data="`
               rotate(${ranges[0].value}deg)
               scale(${ranges[1].value})
               skew(${ranges[2].value}deg)
               translate(${ranges[3].value}px , ${ranges[4].value}px)`"
            stylesheet="transform:"
    />
  </section>
</template>

<script setup>
import Output from "~/components/Output.vue";
const ranges = ref([
  {
    id: 1,
    title: 'Rotate',
    value: 0,
    min: 0,
    max: 360,
    step: 1,
  },
  {
    id: 2,
    title: 'Scale',
    value: 0.8,
    min: 0,
    max: 1.7,
    step: 0.1,
  },
  {
    id: 3,
    title: 'Skew',
    value: 0,
    min: 0,
    max: 180,
    step: 1,
  },
  {
    id: 4,
    title: 'Translate X',
    value: 0,
    min: -200,
    max: 200,
    step: 1,
  },
  {
    id: 5,
    title: 'Translate Y',
    value: 0,
    min: -200,
    max: 200,
    step: 1,
  },
])
</script>