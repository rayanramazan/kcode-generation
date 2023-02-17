<template>
  <div class="w-full flex justify-center gap-4 flex-col">
      <div class="text-center flex flex-col hover:bg-primary/5 duration-300 bg-primary/10 border-1 border-primary p-6 rounded text-lg text-white">
        <span>
          {{ props.stylesheet }}
          {{ props.data }};
        </span>
      </div>
    <button class="bg-primary text-white p-2 rounded">
      Copy
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  data: String,
  stylesheet: String
})

</script>