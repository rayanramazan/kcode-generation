<template>
  <section class="w-full mt-26 lg:mx-0 p-4">
    <div class="flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4">
      <div class="flex flex-col gap-6">
        <h1
            class="bg-white/5 rounded-md border-1 border-white/10 text-lg text-white p-2"
        >
          {{ $t('filter-options') }}
        </h1>

        <div
            v-for="range in ranges"
            :key="range"
            class="w-full md:w-80 flex flex-col gap-2">
          <span class="text-white">
            {{ range.title[locale] }}
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
            src="https://images.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="w-full md:w-96 h-96 bg-primary object-cover"
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
    <Footer />
  </section>
</template>

<script setup>
import Output from "~/components/Output.vue";

const ranges = ref([
  {
    id: 1,
    title: {
      'EN_US': 'Grayscale',
      'AR_IQ': 'تدرج الرمادي',
      'KUKA_KU': 'خۆڵەمێشی',
      'KUSA_KU': 'خۆڵەمێشی'
    },
    value: 0,
    min: 0,
    max: 100,
    steps: 1
  },
  {
    id: 2,
    title: {
      'EN_US': 'Sepia',
      'AR_IQ': 'بني داكن',
      'KUKA_KU': 'سێپیا',
      'KUSA_KU': 'سێپیا'
    },
    value: 0,
    min: 0,
    max: 100,
    steps: 1
  },
  {
    id: 3,
    title: {
      'EN_US': 'Blur',
      'AR_IQ': 'طمس',
      'KUKA_KU': 'کاڵبوونەوە',
      'KUSA_KU': 'کاڵبوونەوە'
    },
    value: 0,
    min: 0,
    max: 10,
    steps: 1
  },
  {
    id: 4,
    title: {
      'EN_US': 'Brightness',
      'AR_IQ': 'سطوع',
      'KUKA_KU': 'ڕووناکی',
      'KUSA_KU': 'ڕووناکی'
    },
    value: 100,
    min: 0,
    max: 200,
    steps: 1
  },
  {
    id: 5,
    title: {
      'EN_US': 'Hue Rotate',
      'AR_IQ': 'تدوير هوى',
      'KUKA_KU': 'ڕەنگ سوڕانەوە',
      'KUSA_KU': 'ڕەنگ سوڕانەوە'
    },
    value: 0,
    min: 0,
    max: 360,
    steps: 1
  },
  {
    id: 6,
    title: {
      'EN_US': 'Saturate',
      'AR_IQ': 'تشبع',
      'KUKA_KU': 'تێر بکە',
      'KUSA_KU': 'تێر بکە'
    },
    value: 100,
    min: 0,
    max: 1000,
    steps: 1
  },
  {
    id: 7,
    title: {
      'EN_US': 'Opacity',
      'AR_IQ': 'التعتيم',
      'KUKA_KU': 'ناڕوونی',
      'KUSA_KU': 'ناڕوونی'
    },
    value: 100,
    min: 0,
    max: 100,
    steps: 1
  },
  {
    id: 8,
    title: {
      'EN_US': 'Contrast',
      'AR_IQ': 'مقابلة',
      'KUKA_KU': 'پێچەوانە',
      'KUSA_KU': 'پێچەوانە'
    },
    value: 100,
    min: 0,
    max: 1000,
    steps: 1
  },
  {
    id: 9,
    title: {
      'EN_US': 'Invert',
      'AR_IQ': 'عكس',
      'KUKA_KU': 'پێچەوانەکردنەوە',
      'KUSA_KU': 'پێچەوانەکردنەوە'
    },
    value: 0,
    min: 0,
    max: 100,
    steps: 1
  },
])

const locale =  useState('locale.setting')
</script>