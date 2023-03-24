<template>
  <div>
    <Menu dir="ltr" as="div" class="relative inline-block" style="z-index: 1001;">
      <div>
        <MenuButton
            class="w-full text-white"
        >
          <Icon name="carbon:ibm-watson-language-translator" class="w-5 h-5 md:w-6 md:h-6" />
          <Icon name="ph:caret-down-light" class="w-4 h-4 mx-2"/>
        </MenuButton>
      </div>

      <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
            :class="localeLanguage === 'EN_US' ? 'right-0' : 'left-0'"
            class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#111] backdrop-blur-md	 shadow-lg">
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                  @click="localeLanguage = 'EN_US'"
                  :class="[
                  active ? 'bg-primary text-white' : 'text-white',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <span class="font-mono text-[10px] mr-2"> EN </span> ENGLISH
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                  @click="localeLanguage = 'KUSA_KU'"
                  :class="[
                  active ? 'bg-primary text-white' : 'text-white',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <span class="font-mono text-[10px] mr-2"> KR </span> KURDISH [SO]
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                  @click="localeLanguage = 'KUKA_KU'"
                  :class="[
                  active ? 'bg-primary text-white' : 'text-white',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <span class="font-mono text-[10px] mr-2"> KR </span> KURDISH [BA]
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                  @click="localeLanguage = 'AR_IQ'"
                  :class="[
                  active ? 'bg-primary text-white' : 'text-white',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <span class="font-mono text-[10px] mr-2"> AR </span> ARABIC
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const {locale} = useI18n()
const localeLanguage =  useState<string>('locale.setting')
const { t } = useLang()
</script>
