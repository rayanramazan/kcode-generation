<template>
    <span class="mt-8 text-2xl text-white font-bold">
        CSS Minifier
    </span>
    <p class="text-white/80">
        Online CSS Minifier Tool and Compressor
    </p>
   <div class="w-full flex flex-col mt-5">
    <textarea v-model="minifier" rows="20" class="outline-none bg-primary/30 rounded text-white p-4"></textarea>
    <div class="flex justify-between items-center mt-4">
        <button class="bg-primary p-2 rounded text-white hover:-translate-y-1 transform duration-300">Remove Spaces and Line Breaks</button>
        <button @click="minifier = ''" class="bg-white text-primary p-2 rounded hover:-translate-y-1 transform duration-300">Clear</button>
    </div>
  </div>

    <span class="mt-8 text-2xl text-white font-bold">
        Minified CSS Output
    </span>
   <div class="w-full flex flex-col mt-5">
    <textarea rows="20" class="outline-none bg-primary/30 rounded text-white p-4" disabled v-model="minifier" id="copy-input"></textarea>
    <div class="flex justify-start items-center mt-4">
        <button 
            @click="copyText"
            class="bg-primary p-2 rounded text-white hover:-translate-y-1 transform duration-300">Copy to Clipboard</button>

    </div>
  </div>

  <!-- {{ minifier.value }} -->
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