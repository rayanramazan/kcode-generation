<template>
    <span class="mt-8 mb-4 text-2xl text-white font-bold">
        {{ $t('buttons-generator') }}
    </span>
    <p class="text-white/80">
        {{ $t('d-button-generation') }}
    </p>
        <div class="flex flex-col mt-4 mb-10">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4 relative z-30">
                <button 
                @click="code = data.component.code"
                v-for="data in buttons" :key="data.id" :class="data.component.className">Click Me</button>
            </div>
        </div>


        <CodeEditor :code="code" lang="css" v-show="code == null"/>

</template>
    
<script setup lang="ts">
const buttons = await useButtons()

const code = ref('')
</script>
