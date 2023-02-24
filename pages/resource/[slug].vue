<template>
  <template v-if="data">
    <div class="m-8 text-center">
      <h1 class="text-xl sm:text-2xl capitalize md:text-3xl font-bold text-white">
        {{ data.slug }}
      </h1>
      <span class="text-white/70 text-sm sm:text-base">
    We’ve made a few other resources to help you with your design and development workflow.
  </span>
    </div>
    <div class="w-full flex gap-4 justify-center flex-wrap">
      <NuxtLink
          v-for="tool in data.item"
          :key="tool.id"
          :to="`${tool.path}`"
          class="relative group overflow-hidden"
      >
        <img
            class="w-full sm:w-full h-full object-cover rounded-lg sm:h-52 duration-300"
            :alt="tool.id"
            :srcset="`http://drive.google.com/uc?export=view&id=${tool.img}`"
            :src="`http://drive.google.com/uc?export=view&id=${tool.img}`" />
        <h1 class="w-full absolute -bottom-14 duration-300 group-hover:bottom-0 text-white text-2xl bg-gradient-to-t p-4 from-[#202020] to-transparent">
          Hello World
        </h1>
      </NuxtLink>
    </div>
  </template>
  <template v-else>
    <error />
  </template>

</template>
<script setup lang="ts">
const resources = await useResources()

const tools = await useTools()
const route = useRoute()
// const locale = useState<string>('locale.setting')
const data = tools.find(
    (tools) => tools.slug ===route.params.slug
)
</script>