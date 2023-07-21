<template>
    <div class="flex flex-col mt-26">
        <div class="flex justify-start flex-col w-full">
        <span class="mb-1 text-4xl text-white font-bold">
            Make your job easier
        </span>
        <p class="text-white/80 text-xl">
            Here we have a lot of things available for advanced website developers
        </p>
        </div>

        <span class="mt-10 text-2xl text-white font-bold">
            {{ $t('resource') }}
        </span>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-2 mr-4 gap-4 relative z-30">

        <div 
        v-for="data in resources.slice(0, 3)" :key="data.id"
        class="bg-[#311F37] flex flex-col justify-between p-4 w-full border hover:border-primary/40 duration-300 border-transparent  rounded-lg">
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
                    <span class="text-[#C147E9] transform group-hover:mr-2 duration-300">Try now</span>
                    <Icon name="ic:baseline-keyboard-arrow-right" class="w-6 h-6 text-[#C147E9]"/>
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
        {{ $t('buttons-generator') }}
    </span>
    <p class="text-white/80">
        {{ $t('d-button') }}
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