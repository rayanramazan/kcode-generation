<template>
  <section class="w-full mt-26 lg:p-0 p-4">
    <div class="flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4">
      <div class="flex flex-col gap-6">
        <h1
            class="bg-white/5 rounded-md border-1 border-white/10 text-lg text-white p-2"
        >
          {{ $t('transform-options') }}
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
    title: {
      'EN_US': 'Rotate',
      'AR_IQ': 'استدارة',
      'KUKA_KU': 'سوڕانەوە',
      'KUSA_KU': 'سوڕانەوە'
    },
    value: 0,
    min: 0,
    max: 360,
    step: 1,
  },
  {
    id: 2,
    title: {
      'EN_US': 'Scale',
      'AR_IQ': 'حجم',
      'KUKA_KU': 'سکەیڵ',
      'KUSA_KU': 'سکەیڵ'
    },
    value: 0.8,
    min: 0,
    max: 1.7,
    step: 0.1,
  },
  {
    id: 3,
    title: {
      'EN_US': 'Skew',
      'AR_IQ': 'انحراف',
      'KUKA_KU': 'سکێو',
      'KUSA_KU': 'سکێو'
    },
    value: 0,
    min: 0,
    max: 180,
    step: 1,
  },
  {
    id: 4,
    title: {
      'EN_US': 'Translate X',
      'AR_IQ': 'ترجمة X',
      'KUKA_KU': 'وەرگێڕانی X',
      'KUSA_KU': 'وەرگێڕانی X'
    },
    value: 0,
    min: -200,
    max: 200,
    step: 1,
  },
  {
    id: 5,
    title: {
      'EN_US': 'Translate Y',
      'AR_IQ': 'ترجمة Y',
      'KUKA_KU': 'وەرگێڕانی Y',
      'KUSA_KU': 'وەرگێڕانی Y'
    },
    value: 0,
    min: -200,
    max: 200,
    step: 1,
  },
])

const locale =  useState('locale.setting')
</script>