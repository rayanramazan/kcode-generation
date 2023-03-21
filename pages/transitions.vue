<template>
    <div class="w-full px-2 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-primary/20 p-1">
          <Tab
            as="template"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
                'focus:outline-none',
                selected
                  ? 'bg-white shadow'
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
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
                'focus:outline-none',
                selected
                  ? 'bg-white shadow'
                  : 'text-[#fff] hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              HTML
            </button>
          </Tab>
          <Tab
            as="template"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
                'focus:outline-none',
                selected
                  ? 'bg-white shadow'
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
              'rounded-xl bg-white p-3',
              'focus:outline-none',
            ]"
          >
            <span 
            class="flex flex-col justify-center items-center"
            v-html="categories.html_code">
            </span>
          </TabPanel>

          <TabPanel
            :class="[
              'rounded-xl bg-white p-3',
              'focus:outline-none',
            ]"
          >
            <v-ace-editor
                v-model:value="categories.html_code"
                @init="editorInit"
                lang="html"
                theme="cobalt"
                style="height: 300px" 
            />
          </TabPanel>


          <TabPanel
            :class="[
              'rounded-xl bg-white p-3',
              'focus:outline-none',
            ]"
          >
            <v-ace-editor
                v-model:value="categories.css_code"
                @init="editorInit"
                lang="css"
                theme="cobalt"
                class="h-[600px]"
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </template>

  
  <script setup>
  import { ref } from 'vue'
  import { VAceEditor } from 'vue3-ace-editor';
  import 'brace/theme/github';
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  
  const categories = ref({
        html_code: '<div class="square ttf-linear bg-primary" tabindex="0">linear</div>\n'+
                    '<div class="square ttf-ease bg-primary" tabindex="0">ease</div>\n'+
                    '<div class="square ttf-ease-in bg-primary" tabindex="0">ease-in</div>\n'+
                    '<div class="square ttf-ease-out bg-primary" tabindex="0">ease-out</div>\n'+
                    '<div class="square ttf-ease-in-out bg-primary" tabindex="0">ease-in-out</div>\n'+
                    '<div class="square ttf-steps bg-primary" tabindex="0">steps</div>\n'+
                    '<div class="square ttf-cubic bg-primary" tabindex="0">cubic</div>\n',
        css_code: '.square {\n'+
                    '   width: 150px;\n'+
                    '   max-height: 100px;\n'+
                    '   background-color: lightcoral;\n'+
                    '   border-radius: 8px;\n'+
                    '   text-align: center;\n'+
                    '   padding: 8px;\n'+
                    '   margin-bottom: 4px;\n'+
                    '   transition-property: width;\n'+
                    '   transition-duration: 1s;\n'+
                    '}\n\n'+
                    '.square.ttf-linear {\n'+
                    '   transition-timing-function: linear;\n'+
                    '}\n\n'+
                    '.square.ttf-ease {\n'+
                    '   transition-timing-function: ease;\n'+
                    '}\n\n'+
                    '.square.ttf-ease-in {\n'+
                    '   transition-timing-function: ease-in;\n'+
                    '}\n'+
                    '.square.ttf-ease-out {\n'+
                    '   transition-timing-function: ease-out;\n'+
                    '}\n\n'+
                    '.square.ttf-ease-in-out {\n'+
                    '   transition-timing-function: ease-in-out;\n'+
                    '}\n\n'+
                    '.square.ttf-steps {\n'+
                    '   transition-timing-function: steps(3);\n'+
                    '}\n\n'+
                    '.square.ttf-cubic {\n'+
                    '   transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);\n'+
                    '}\n\n'+
                    '.square:is(:hover, :focus) {\n'+
                    '   width: 50%;\n'+
                    '}\n'
  })
  </script>
  