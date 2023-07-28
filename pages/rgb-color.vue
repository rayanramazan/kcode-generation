<template>
  <section class="w-full mt-26 lg:mx-0 p-4">
    <div class="flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4">
      <div class="flex flex-col gap-6">
        <h1
            class="pb-1 text-lg text-white border-b-1 border-white/10 font-bold"
        >
          {{ $t('rgb-options') }}
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
            class="w-full md:w-96 h-96">
        </div>
      </div>
    </div>
    <Output :data="`rgb(${ranges[0].value}, ${ranges[1].value}, ${ranges[2].value})`"
            stylesheet="background: "
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
      'EN_US': 'Red',
      'AR_IQ': 'أحمر',
      'KUKA_KU': 'سوور',
      'KUSA_KU': 'سوور'
    },
    value: 193
  },
  {
    id: 2,
    title: {
      'EN_US': 'Green',
      'AR_IQ': 'أخضر',
      'KUKA_KU': 'سەوز',
      'KUSA_KU': 'سەوز'
    },
    value: 71
  },
  {
    id: 3,
    title: {
      'EN_US': 'Blue',
      'AR_IQ': 'أزرق',
      'KUKA_KU': 'شین',
      'KUSA_KU': 'شین'
    },
    value: 233
  },
])

const locale=  useState('locale.setting')
</script>