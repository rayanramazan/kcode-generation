<template>
  <div class="mt-26 lg:p-0 p-4 lg:mr-4">
    <span class="mt-8  text-xl md:text-2xl text-white font-bold">
      {{ $t('CSS-minifier') }}
    </span>
    <p class="text-white/80 text-sm md:text-base">
      {{ $t('d-css-minifier') }}
    </p>
    <div class="w-full flex flex-col mt-5">
      <textarea v-model="minifier" rows="20" class="outline-none bg-secondary/10 rounded text-white p-4"></textarea>
      <div class="flex justify-between items-center mt-4">
          <button @click="copyText" class="border border-secondary/50 p-2 rounded text-white hover:-translate-y-1 transform duration-300">
            {{ $t('copy-to-clipboard-minifier') }}
          </button>
          <button @click="minifier = ''" class="bg-white text-primary p-2 rounded hover:-translate-y-1 transform duration-300">
            {{ $t('clear-minifier') }}
          </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const minifier = ref('')
const textToCopy = ref(null)
const response = ref(false)

watch(minifier, (newValue) => {
    minifier.value = newValue.replace(/\s+/g, '')
})


const copyText = () => {
  if (textToCopy.value) {
    const text = textToCopy.value.innerText
    navigator.clipboard.writeText(text)
    response.value = true
  }
}

watch(response, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      response.value = false
    }, 3000)
  }
})

</script>