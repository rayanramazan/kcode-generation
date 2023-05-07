<template>
    <span class="mt-8 mb-4  text-xl md:text-2xl text-white font-bold">
      {{ $t('transitions-duration') }}
    </span>
        <div class="w-full px-2 sm:px-0">
      <TabGroup  >
        <TabList class="flex space-x-1 rounded-xl bg-primary/20 p-1">
          <Tab
            as="template"
            v-slot="{ selected }"
            style="z-index: 999;"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'focus:outline-none',
                selected
                  ? 'bg-primary shadow'
                  : 'text-[#fff] hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              {{ $t('result') }}
            </button>
          </Tab>
          <Tab
            as="template"
            v-slot="{ selected }"
            style="z-index: 999;"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'focus:outline-none',
                selected
                  ? 'bg-primary shadow'
                  : 'text-[#fff] hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              HTML
            </button>
          </Tab>
          <Tab
          style="z-index: 999;"
            as="template"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'focus:outline-none',
                selected
                  ? 'bg-primary shadow'
                  : 'text-[#fff] hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              CSS
            </button>
          </Tab>
        </TabList>
  
        <TabPanels class="mt-2">
          <TabPanel
            :class="[
              'rounded-xl bg-primary/20 p-3 border-primary border',
              'focus:outline-none',
            ]"
          >
            <span 
              class="flex flex-col justify-center items-center"
              v-html="transition.transition_duration.html_code">
            </span>
          </TabPanel>

          <TabPanel
            :class="[
              'rounded-xl bg-primary/20 p-3 border-primary border',
              'focus:outline-none',
            ]"
          >
          
          <CodeEditor :code="transition.transition_duration.html_code" lang="html" />
          
        </TabPanel>

          <TabPanel
            :class="[
              'rounded-xl bg-primary/20 p-3 border-primary border',
              'focus:outline-none',
            ]"
          >
            <CodeEditor :code="transition.transition_duration.css_code" lang="css" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
</template>


<script setup lang="ts">
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  const transition = await useTransition();
</script>

