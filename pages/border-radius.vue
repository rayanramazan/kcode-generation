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
              max="100"
              v-model="range.value"
          />
        </div>

        <div>
          <Listbox v-model="selectedStyle">
            <div class="relative mt-1">
              <ListboxButton
                  class="relative w-full cursor-default rounded bg-dark-100/20 text-white border border-primary py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm"
              >
                <span class="block truncate">{{ selectedStyle }}</span>
                <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <Icon name="ic:round-keyboard-arrow-up" class="w-5 h-5" />
                </span>
              </ListboxButton>

              <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
              >
                <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-[#111] text-white py-1 text-base shadow-lg sm:text-sm"
                >
                  <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="style in styleBorder"
                      :key="style.name"
                      :value="style.name"
                      as="template"
                  >
                    <li
                        :class="[
                  active ? 'bg-primary/10 text-primary' : 'text-dark',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
                    >
                <span
                    :class="[
                    selected ? 'font-bold' : 'font-normal',
                    'block truncate',
                  ]"
                >{{ style.name }}</span
                >
                      <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
                      >
                </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
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
            class="w-96 h-96 bg-primary">
        </div>
      </div>
    </div>
    <Output :data="[
        ranges[0].value,
        ranges[1].value,
        ranges[2].value,
        ranges[3].value
    ]"
            stylesheet="border-radius:"
    />
  </section>
</template>

<script setup>
import Output from "~/components/Output.vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const styleBorder = [
  { name: 'solid' },
  { name: 'dotted' },
  { name: 'dashed' },
  { name: 'double' },
  { name: 'groove' },
  { name: 'ridge' },
  { name: 'inset' },
  { name: 'outset' },
  { name: 'none' },
  { name: 'hidden' },

]
const selectedStyle = ref(styleBorder[0])
const ranges = ref([
  {
    id: 1,
    title: 'Top Left Radius',
    value: 0
  },
  {
    id: 2,
    title: 'Top Right Radius',
    value: 0
  },
  {
    id: 3,
    title: 'Bottom Right Radius',
    value: 0
  },
  {
    id: 4,
    title: 'Bottom Left Radius',
    value: 0
  },
])
</script>