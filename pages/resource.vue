<template>
    <span class="mt-8 mb-1 text-2xl text-white font-bold">
       Transitions Delay
   </span>
   <p class="text-white/80">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eum optio ipsam error cumque dolorem ex molestias aspernatur facere laudantium.
   </p>

   <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 relative z-30">

       <div 
        v-for="data in resources" :key="data.id"
        class="bg-[#222] flex flex-col justify-between p-4 w-full border border-primary/40 rounded-lg">
           <div>
               <h1 class="text-2xl text-white">
                   {{ data.title }}
               </h1>
               <p class="text-white/70">
                   {{ data.description }}
               </p>
           </div>
           <hr class="my-4 border-0 bg-white/20 h-[1px] w-full">
           <div class="flex justify-between items-center">
               <button class="flex items-center gap-1 text-white">
                   <span>12</span> 
                   <Icon name="ic:baseline-star-border" class="w-6 h-6"/>
               </button>

               <NuxtLink :to="data.link" class="flex gap-1 items-center group">
                   <span class="text-white transform group-hover:mr-2 duration-300 group-hover:text-primary">Website</span>
                   <Icon name="ic:baseline-keyboard-arrow-right" class="w-6 h-6 text-primary"/>
               </NuxtLink>
           </div>
       </div>


   </div>
</template>

<script setup lang="ts">
const resources = await useResources()
</script>