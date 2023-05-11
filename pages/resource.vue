<template>
    <span class="mt-8 text-xl md:text-2xl text-white font-bold">
       {{ $t('resource') }}
   </span>
   <p class="text-white/80 text-sm md:text-base">
        {{ $t('d-resource') }}
    </p>

    

   <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 relative z-30">

       <div 
        v-for="data in resources" :key="data.id"
        class="bg-[#222] flex flex-col justify-between p-4 w-full border hover:border-primary/40 duration-300 border-transparent  rounded-lg">
           <div>
               <h1 class="text-2xl text-white">
                   {{ data.title }}
               </h1>
               <p class="text-white/70">
                   {{ data.description[locale] }}
               </p>
           </div>
           <hr class="my-4 border-0 bg-white/20 h-[1px] w-full">
           <div class="flex justify-between items-center">
               <NuxtLink :to="data.link" class="flex gap-1 items-center group">
                   <span class="text-white transform group-hover:mr-2 duration-300 group-hover:text-primary">
                        {{ $t('website') }}
                   </span>
                   <Icon v-if="locale == 'EN_US'" name="ic:baseline-keyboard-arrow-right" class="w-6 h-6 text-primary"/>
                   <Icon v-else name="ic:baseline-keyboard-arrow-left" class="w-6 h-6 text-primary"/>
               </NuxtLink>
           </div>
       </div>


   </div>
</template>

<script setup lang="ts">
const resources = await useResources()
const locale=  useState('locale.setting')
</script>