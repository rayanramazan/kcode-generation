<template>
  <div class="w-full flex justify-center gap-4 flex-col">
      <div class="text-center flex flex-col hover:bg-primary/5 duration-300 bg-primary/10 border-1 border-primary p-6 rounded text-lg text-white">
        <span ref="textToCopy">
          {{ props.stylesheet }}
          {{ props.data }};
        </span>
      </div>
    <button
        @click="copyText"
        class="bg-primary text-white p-2 rounded">
      <span v-if="response === true">
        Copied
      </span>
      <span v-else>
        Copy
      </span>
    </button>
  </div>

</template>

<script setup>
const props = defineProps({
  data: String,
  stylesheet: String
})

const textToCopy = ref(null)
const response = ref(false)
// Function to copy the text to the clipboard
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