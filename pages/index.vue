<template>
    <div class="flex flex-col justify-center items-center mt-10">
      <div class="w-full">
        <img src="../assets/img/home.jpg" class="w-full h-96 object-cover bg-top	rounded" alt="" srcset="">
      </div>

    <span class="mt-20 mb-1 text-2xl text-white font-bold">
        {{ $t('resource') }}
    </span>
    <p class="text-white/80">
        {{ $t('d-resource') }}
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 relative z-30">

        <div 
        v-for="data in resources.slice(0, 3)" :key="data.id"
        class="bg-[#222] flex flex-col justify-between p-4 w-full border border-primary/40 rounded-lg">
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
                    <span class="text-white transform group-hover:mr-2 duration-300 group-hover:text-primary">Website</span>
                    <Icon name="ic:baseline-keyboard-arrow-right" class="w-6 h-6 text-primary"/>
                </NuxtLink>
            </div>
        </div>

    </div>


    <hr class="border-0 h-[1px] bg-white/20 w-full mt-20 mb-4">

    <div class="flex w-full justify-center mt-20">
        <div class="md:h-80 p-4 md:p-0 bg-primary w-full flex justify-center md:justify-between items-center md:items-end flex-col md:flex-row-reverse">
            <img src="../assets/img/Coder_Front.png" class="md:w-[60%]" alt="" srcset="">
                <div class="flex flex-col md:p-10">
                    <span class="text-white text-xl">
                        You are
                    </span>
                    <span class="text-2xl text-white font-bold">
                         Web Designer !
                    </span>
                    <hr class="my-2">
                    <span class="text-white">
                        Everything is made easy for berry here
                    </span>
                </div>
        </div>
    </div>

    <hr class="border-0 h-[1px] bg-white/20 w-full mt-20 mb-4">


    <span class="mt-4 mb-4 text-2xl text-white font-bold">
        Transitions Delay
    </span>
    <p class="text-white/80">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eum optio ipsam error cumque dolorem ex molestias aspernatur facere laudantium.
    </p>
    <div class="flex flex-col mt-4 mb-10 w-full">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4 relative z-30">
            <NuxtLink
            :to="localePath('buttons')"
            class="text-center" 
            v-for="data in buttons.slice(0, 6)" :key="data.id" :class="data.component.className">Click Me</NuxtLink>
        </div>
    </div>


    </div>
</template>

<script setup lang="ts">
const resources = await useResources()
const buttons = await useButtons()
const locale=  useState('locale.setting')
</script>