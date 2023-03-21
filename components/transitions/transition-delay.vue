<template>
    <span class="mt-8 mb-4 text-2xl text-white font-bold">
        Transitions Delay
    </span>
        <div class="w-full px-2 sm:px-0">
      <TabGroup  >
        <TabList class="flex space-x-1 rounded-xl bg-primary/20 p-1">
          <Tab
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
              Result
            </button>
          </Tab>
          <Tab
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
            v-html="transition_timing_function.html_code">
            </span>
          </TabPanel>

          <TabPanel
            :class="[
              'rounded-xl bg-primary/20 p-3 border-primary border',
              'focus:outline-none',
            ]"
          >
            <v-ace-editor
                v-model:value="transition_timing_function.html_code"
                @init="editorInit"
                lang="html"
                class="bg-primary/0 text-white"
                theme="cobalt"
                style="height: 300px" 
            />
          </TabPanel>

          <TabPanel
            :class="[
              'rounded-xl bg-primary/20 p-3 border-primary border',
              'focus:outline-none',
            ]"
          >
            <v-ace-editor
                v-model:value="transition_timing_function.css_code"
                @init="editorInit"
                lang="css"
                class="bg-primary/0 text-white h-[300px]"
                theme="cobalt"
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
</template>


<script setup lang="ts">
import { VAceEditor } from 'vue3-ace-editor';
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  const transition_timing_function = ref({
        html_code: '<div class="rectangle bg-primary" tabindex="0">no delay</div>\n'+
                    '<div class="rectangle bg-primary" tabindex="0">100ms delay</div>\n'+
                    '<div class="rectangle bg-primary" tabindex="0">200ms delay</div>\n'+
                    '<div class="rectangle bg-primary" tabindex="0">500ms delay</div>\n'+
                    '<div class="rectangle bg-primary" tabindex="0">1000ms delay</div>\n',
        css_code: '.rectangle {\n' +
                    '   width: 150px;\n' +
                    '   max-height: 100px;\n' +
                    '   border-radius: 8px;\n' +
                    '   text-align: right;\n' +
                    '   padding: 8px;\n' +
                    '   margin-bottom: 4px;\n' +
                    '}\n\n'+
                    '.rectangle:nth-child(1) {\n' +
                    '   transition-delay: 0s;\n' +
                    '}\n\n' +
                    '.rectangle:nth-child(2) {\n' +
                    '   transition-delay: 100ms;\n' +
                    '}\n\n' +
                    '.rectangle:nth-child(3) {\n' +
                    '   transition-delay: 200ms;\n' +
                    '}\n\n' +
                    '.rectangle:nth-child(4) {\n' +
                    '   transition-delay: 500ms;\n' +
                    '}\n\n' +
                    '.rectangle:nth-child(5) {\n' +
                    '   transition-delay: 1000ms;\n' +
                    '}\n\n' +
                    '.rectangle:is(:hover, :focus) {\n' +
                    '   background-color: transparent;\n' +
                    '}\n'
  })
</script>

