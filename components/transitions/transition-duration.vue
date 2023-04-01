<template>
    <span class="mt-8 mb-4 text-2xl text-white font-bold">
        Transitions Duration
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
              Result
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
              v-html="transition_duration.html_code">
            </span>
          </TabPanel>

          <TabPanel
            :class="[
              'rounded-xl bg-primary/20 p-3 border-primary border',
              'focus:outline-none',
            ]"
          >
          
          <CodeEditor :code="transition_duration.html_code" lang="html" />
          
        </TabPanel>

          <TabPanel
            :class="[
              'rounded-xl bg-primary/20 p-3 border-primary border',
              'focus:outline-none',
            ]"
          >
            <CodeEditor :code="transition_duration.css_code" lang="css" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
</template>


<script setup lang="ts">
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  const transition_duration = ref({
        html_code: '<div class="wrapper">\n'+
                    '   <div class="squares td-instant bg-primary" tabindex="0">\n'+
                    '       instant\n'+
                    '   <p class="duration">\n'+
                    '       0ms\n'+
                    '   </p>\n'+
                    '</div>\n\n'+
                    '<div class="squares td-speedy bg-primary" tabindex="0">\n'+
                    '    speedy\n'+
                    '    <p class="duration">\n'+
                    '        200ms\n'+
                    '    </p>\n'+
                    '</div>\n\n'+
                    '<div class="squares td-middling bg-primary" tabindex="0">\n'+
                    '    middling\n'+
                    '    <p class="duration">\n'+
                    '        800ms\n'+
                    '    </p>\n'+
                    '</div>\n\n'+
                    '<div class="squares td-glacial bg-primary" tabindex="0">\n'+
                    '    glacial\n'+
                    '    <p class="duration">\n'+
                    '        5000ms\n'+
                    '    </p>\n'+
                    '</div>\n\n'+
                '</div>\n',
        css_code: '.square {\n'+
                    '   width: 100px;\n'+
                    '   height: 100px;\n'+
                    '   border-radius: 8px;\n'+
                    '   background-color: springgreen;\n'+
                    '   transition-property: transform;\n'+
                    '   transition-timing-function: ease;\n'+
                    '   padding: 8px;\n'+
                    '}\n\n'+

                    '.square.td-instant {\n'+
                    '   transition-duration: 0s;\n'+
                    '}\n\n'+

                    '.square.td-speedy {\n'+
                    '   transition-duration: 200ms;\n'+
                    '}\n\n'+

                    '.square.td-middling {\n'+
                    '   transition-duration: 800ms;\n'+
                    '}\n\n'+

                    '.square.td-glacial {\n'+
                    '   transition-duration: 5s;\n'+
                    '}\n\n'+

                    '.square:is(:hover, :focus) {\n'+
                    '   transform: scale(0.8);\n'+
                    '}\n\n'+

                    '.wrapper {\n'+
                    '   display: grid;\n'+
                    '   grid-template-columns: 1fr 1fr;\n'+
                    '   grid-gap: 32px;\n'+
                    '}\n\n'+

                    '.wrapper .square:nth-child(odd) {\n'+
                    '   justify-self: end;\n'+
                    '}\n\n'+

                    '.wrapper .square:nth-child(even) {\n'+
                    '   justify-self: start;\n'+
                    '}\n'
  })
</script>

