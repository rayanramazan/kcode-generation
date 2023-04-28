<template>
    <span class="mt-8 text-2xl text-white font-bold">
        {{ $t('meta-tags-generator') }}
    </span>
    <p class="text-white/80">
        {{ $t('d-meta-tags') }}
    </p>

    <div class="grid lg:grid-cols-2 mt-3 gap-4 relative z-30">
        <div class="flex flex-col gap-3">
            <p class="font-bold text-white text-xl">
                {{ $t('options-meta') }}
            </p>
            <div class=" bg-[#222] flex flex-col p-4 gap-6 rounded">
                <div class="flex flex-col gap-1">
                    <label for="" class="text-white">{{ $t('charset') }}</label>
                    <Listbox v-model="selectedCharset">
                        <div class="relative mt-1">
                            <ListboxButton
                            class="relative w-full cursor-default rounded-lg bg-transparent border border-primary py-2 pl-3 pr-10 text-left shadow-md focus:outline-none text-white sm:text-sm"
                            >
                            <span class="block truncate">{{ selectedCharset.name }}</span>
                            <span
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                            >
                                <ChevronUpDownIcon
                                class="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                                />
                            </span>
                            </ListboxButton>
        
                            <transition
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                            >
                            <ListboxOptions
                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#222] py-1 text-base shadow-lg focus:outline-none sm:text-sm"
                            >
                                <ListboxOption
                                v-slot="{ active, selected }"
                                v-for="charset in charsets"
                                :key="charset.name"
                                :value="charset"
                                as="template"
                                >
                                <li
                                    :class="[
                                    active ? 'bg-primary/10 text-primary' : 'text-white',
                                    'relative cursor-default select-none py-2 pl-10 pr-4',
                                    ]"
                                >
                                    <span
                                    :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]"
                                    >{{ charset.name }}</span
                                    >
                                    <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
                                    >
                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                    </span>
                                </li>
                                </ListboxOption>
                            </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>

            
                <div class="flex flex-col gap-1">
                    <label for="" class="text-white">
                        {{ $t('title-meta') }}
                    </label>
                    <input type="text" v-model="title" class="outline-none bg-transparent rounded-lg text-white border border-primary py-2 pl-3 pr-10">
                </div>

                <div class="flex flex-col gap-1">
                    <label for="" class="text-white">
                        {{ $t('description-meta') }}
                    </label>
                    <textarea rows="3" v-model="description" class="outline-none bg-transparent rounded-lg text-white border border-primary py-2 pl-3 pr-10"></textarea>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="" class="text-white">
                        {{ $t('author-meta') }}
                    </label>
                    <input type="text" v-model="author" class="outline-none bg-transparent rounded-lg text-white border border-primary py-2 pl-3 pr-10">
                </div>

                <div class="flex flex-col gap-1">
                    <label for="" class="text-white">
                        {{ $t('copyright-meta') }}
                    </label>
                    <input type="text" v-model="copyright" class="outline-none bg-transparent rounded-lg text-white border border-primary py-2 pl-3 pr-10">
                </div>

            </div>
        </div>


        <div class="flex flex-col gap-3">
            <p class="font-bold text-white text-xl">
                {{ $t('code-meta') }}
            </p>
            <div>
                <p class="text-white mb-2">
                    {{ $t('code-copy') }}
                </p>
                <CodeEditor :code='
                `<meta charset="${selectedCharset.name}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="author" content="${author}">
<meta name="copyright" content="${copyright}">
                `
                ' />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const title = ref('KSHOP')
const description = ref('')
const author = ref('')
const copyright = ref('')
const charsets = [
  { name: 'big5' },
  { name: 'euc-kr' },
  { name: 'iso-8859-1' },
  { name: 'iso-8859-2' },
  { name: 'iso-8859-3' },
  { name: 'iso-8859-4' },
  { name: 'iso-8859-5' },
  { name: 'iso-8859-6' },
  { name: 'iso-8859-7' },
  { name: 'iso-8859-8' },
  { name: 'koi8-r' },
  { name: 'shift-jis' },
  { name: 'x-euc' },
  { name: 'utf-8' },
  { name: 'windows-1250' },
  { name: 'windows-1251' },
  { name: 'windows-1252' },
  { name: 'windows-1253' },
  { name: 'windows-1254' },
  { name: 'windows-1255' },
  { name: 'windows-1256' },
  { name: 'windows-1257' },
  { name: 'windows-1258' },
  { name: 'windows-874' },
]
const selectedCharset = ref(charsets[13])
</script>