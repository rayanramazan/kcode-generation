<template>
  <section class="w-full">
    <div class="flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4">
      <div class="flex flex-col gap-6">
        <h1
            class="bg-white/5 rounded-md border-1 border-white/10 text-lg text-white p-2"
        >
          {{ $t('box-shadow-options') }}
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
        <div
            :style="`
              box-shadow: ${ranges[0].value}px ${ranges[1].value}px ${ranges[2].value}px rgba(255, 255, 255, ${ranges[3].value});
              `"
            class="w-full md:w-96 h-96 bg-primary">
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
    title: {
      'EN_US': 'Horizontal Shadow Length',
      'AR_IQ': 'طول الظل الأفقي',
      'KUKA_KU': 'درێژی سێبەری ئاسۆیی',
      'KUSA_KU': 'درێژی سێبەری ئاسۆیی'
    },
    value: 4,
    min: -200,
    max: 200,
    steps: 1
  },
  {
    id: 2,
    title: {
      'EN_US': 'Vertical Shadow Length',
      'AR_IQ': 'طول الظل العمودي',
      'KUKA_KU': 'درێژی سێبەری ڕاست',
      'KUSA_KU': 'درێژی سێبەری ڕاست'
    },
    value: 4,
    min: -200,
    max: 200,
    steps: 1
  },
  {
    id: 3,
    title: {
      'EN_US': 'Blur Radius',
      'AR_IQ': 'نصف القطر الضبابي',
      'KUKA_KU': 'تیژڕەوی کاڵ',
      'KUSA_KU': 'تیژڕەوی کاڵ'
    },
    value: 2,
    min: 0,
    max: 400,
    steps: 1
  },
  {
    id: 4,
    title: {
      'EN_US': 'Shadow Color Opacity',
      'AR_IQ': 'تعتيم لون الظل',
      'KUKA_KU': 'ناڕوونی ڕەنگی سێبەر',
      'KUSA_KU': 'ناڕوونی ڕەنگی سێبەر'
    },
    value: 0.6,
    min: 0,
    max: 1,
    steps: 0.01
  },
])

const locale=  useState('locale.setting')
</script>