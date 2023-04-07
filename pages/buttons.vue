<template>
        <div class="flex flex-col" >
            <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4 relative z-30">
                <button 
                @click="code = data.component.code"
                v-for="data in buttons" :key="data.id" :class="data.component.className">Click Me</button>
            </div>
        </div>

        <CodeEditor :code="code" lang="css" />

</template>
    
<script setup lang="ts">
const buttons = await useButtons()

const code = ref('')
</script>
