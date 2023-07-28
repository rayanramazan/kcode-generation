<template>
  <section class="w-full mt-26 lg:mx-0 p-4">
    <div class="flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4">
      <div class="flex flex-col gap-6">
        <h1
            class="pb-1 text-lg text-white border-b-1 border-white/10 font-bold"
        >
          {{ $t('border-radius-options') }}
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
              min="0"
              max="100"
              v-model="range.value"
          />
        </div>
      </div>
      <div>
        <div
            :style="`
              border-top-left-radius: ${ranges[0].value}%;
              border-top-right-radius: ${ranges[1].value}%;
              border-bottom-right-radius: ${ranges[2].value}%;
              border-bottom-left-radius: ${ranges[3].value}%;
              `"
            class="w-full md:w-96 h-96 bg-primary">
        </div>
      </div>
    </div>
    <Output :data="`${ranges[0].value}% ${ranges[1].value}% ${ranges[2].value}% ${ranges[3].value}%`"
            stylesheet="border-radius:"
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
      'EN_US': 'Top Left Radius',
      'AR_IQ': 'أعلى نصف القطر الأيسر',
      'KUKA_KU': 'تیژڕەوی سەرەوەی چەپ',
      'KUSA_KU': 'تیژڕەوی سەرەوەی چەپ'
    },
    value: 0
  },
  {
    id: 2,
    title: {
      'EN_US': 'Top Right Radius',
      'AR_IQ': 'أعلى نصف القطر الأيمن',
      'KUKA_KU': 'تیژڕەوی سەرەوەی ڕاست',
      'KUSA_KU': 'تیژڕەوی سەرەوەی ڕاست'
    },
    value: 0
  },
  {
    id: 3,
    title: {
      'EN_US': 'Bottom Right Radius',
      'AR_IQ': 'نصف القطر الأيمن السفلي',
      'KUKA_KU': 'تیژڕەوی سەرەوەی ڕاست',
      'KUSA_KU': 'تیژڕەوی خوارەوەی ڕاست'
    },
    value: 0
  },
  {
    id: 4,
    title: {
      'EN_US': 'Bottom Left Radius',
      'AR_IQ': 'نصف القطر السفلي الأيسر',
      'KUKA_KU': 'تیژڕەوی سەرەوەی ڕاست',
      'KUSA_KU': 'خوارەوە چەپ تیژڕەوی',
    },
    value: 0
  },
])

const locale=  useState('locale.setting')
</script>