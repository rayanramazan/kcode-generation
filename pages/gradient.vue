<template>
  <section class="w-full mt-26 lg:mx-0 p-4">
    <div class="flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4">
      <div class="flex flex-col gap-6">
        <h1
            class="bg-white/5 rounded-md border-1 border-white/10 text-lg text-white p-2"
        >
          {{ $t('gradient-options') }}
        </h1>

        <div
            class="w-full md:w-80 flex flex-col gap-2">
          <span class="text-white">
            {{ ranges.title[locale] }}
          </span>
          <input
              class="rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full"
              type="range"
              min="0"
              max="360"
              v-model="ranges.value"
          />
        </div>

        <div class="w-full flex justify-between bg-dark-100 rounded h-10">
          <label
              class="rounded"
              for="color-border">
            <input
                v-model="startColor"
                :ref="colorInputStart"
                class="form-input w-24 h-full rounded bg-transparent"
                type="color"
            >

          </label>
          <span class="text-white self-center px-2"> {{ startColor }} </span>
        </div>

        <div class="w-full flex justify-between bg-dark-100 rounded h-10">
          <label
              class="rounded"
              for="color-border">
            <input
                v-model="endColor"
                :ref="colorInputEnd"
                class="form-input w-24 h-full rounded bg-transparent"
                type="color"
            >

          </label>
          <span class="text-white self-center px-2"> {{ endColor }} </span>
        </div>


      </div>
      <div>
        <div
            :style="`
              background: linear-gradient(${ranges.value}deg,${startColor} 0%,${endColor} 100%)
              `"
            class="w-full md:w-96 h-96 bg-primary">
        </div>
      </div>
    </div>
    <Output :data="`linear-gradient(${ranges.value}deg,${startColor} 0%,${endColor} 100%);`"
            stylesheet="background:"
    />

    <Footer />
  </section>
</template>

<script setup>
import Output from "~/components/Output.vue";
const startColor = ref('#3BA676')
const colorInputStart = ref(null)
const endColor = ref('#1E533B')
const colorInputEnd = ref(null)

watch(startColor, endColor, (newValueStart,newValueEnd) => {
  if (colorInputStart.value) {
    colorInputStart.value.value = newValueStart
  } else if (colorInputEnd.value) {
    colorInputEnd.value.value = newValueEnd
  }
})

const ranges = ref(
    {
      id: 1,
      title: {
        'EN_US': 'Degree',
        'AR_IQ': 'درجة',
        'KUKA_KU': 'پلە',
        'KUSA_KU': 'پلە'
      },
      value: 90
    },
)

const locale=  useState('locale.setting')
</script>