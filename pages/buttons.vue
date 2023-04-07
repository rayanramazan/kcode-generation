<template>
        <div class="flex flex-col" >
            <!-- <span class="mt-8 text-2xl text-white font-bold">
                {{ data.component.title }}
            </span> -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4 relative z-30">
                <button v-for="data in buttons" :key="data.id" :class="data.component.className">Click Me</button>
            </div>

        </div>

</template>
    
<script setup lang="ts">
const buttons = await useButtons()
</script>
