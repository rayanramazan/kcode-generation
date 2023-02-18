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
        <img
            :style="`
              filter: grayscale(${ranges[0].value}%)
              blur(${ranges[2].value}px)
              sepia(${ranges[1].value}%)
              brightness(${ranges[3].value}%)
              hue-rotate(${ranges[4].value}deg)
              saturate(${ranges[5].value}%)
              opacity(${ranges[6].value}%)
              contrast(${ranges[7].value}%)
              invert(${ranges[8].value}%);
              `"
            src="https://images.pexels.com/photos/13862593/pexels-photo-13862593.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            class="w-96 h-96 bg-primary object-cover"
        alt="img">

      </div>
    </div>
    <Output :data="`grayscale(${ranges[0].value}%)
              blur(${ranges[2].value}px)
              sepia(${ranges[1].value}%)
              brightness(${ranges[3].value}%)
              hue-rotate(${ranges[4].value}deg)
              saturate(${ranges[5].value}%)
              opacity(${ranges[6].value}%)
              contrast(${ranges[7].value}%)
              invert(${ranges[8].value}%);`"
            stylesheet="filter:"
    />
  </section>
</template>

<script setup>
import Output from "~/components/Output.vue";

const ranges = ref([
  {
    id: 1,
    title: 'Grayscale',
    value: 0,
    min: 0,
    max: 100,
    steps: 1
  },
  {
    id: 2,
    title: 'Sepia',
    value: 0,
    min: 0,
    max: 100,
    steps: 1
  },
  {
    id: 3,
    title: 'Blur',
    value: 0,
    min: 0,
    max: 10,
    steps: 1
  },
  {
    id: 4,
    title: 'Brightness',
    value: 100,
    min: 0,
    max: 200,
    steps: 1
  },
  {
    id: 5,
    title: 'Hue Rotate',
    value: 0,
    min: 0,
    max: 360,
    steps: 1
  },
  {
    id: 6,
    title: 'Saturate',
    value: 100,
    min: 0,
    max: 1000,
    steps: 1
  },
  {
    id: 7,
    title: 'Opacity',
    value: 100,
    min: 0,
    max: 100,
    steps: 1
  },
  {
    id: 8,
    title: 'Contrast',
    value: 100,
    min: 0,
    max: 1000,
    steps: 1
  },
  {
    id: 9,
    title: 'Invert',
    value: 0,
    min: 0,
    max: 100,
    steps: 1
  },
])
</script>