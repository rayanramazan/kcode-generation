<template>
    <div class="flex flex-col mt-26 lg:p-0 p-4 lg:mx-4">
        <div class="flex justify-start flex-col w-full">
        <span class="mb-1 lg:text-4xl text-3xl text-white font-bold">
            {{ $t('title_home') }}
        </span>
        <p class="text-white/80 text-lg lg:text-xl">
            {{ $t('description_home_page') }}
        </p>
        </div>

        <span class="mt-10 text-2xl text-white font-bold">
            {{ $t('resource') }}
        </span>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mr-4 gap-4 relative z-30">
        <div 
        v-for="data in resources.slice(0, 6)" :key="data.id"
        class="bg-[#311F37] flex flex-col justify-between p-4 w-full border hover:border-primary/40 duration-300 border-transparent  rounded-lg">
            <div>
                <h1 class="lg:text-2xl text-xl font-bold text-white">
                    {{ data.title }}
                </h1>
                <p class="text-white/70 lg:text-base text-sm">
                    {{ data.description[locale] }}
                </p>
            </div>
            <hr class="my-4 border-0 bg-white/20 h-[1px] w-full lg:text-base text-sm">
            <div class="flex justify-between items-center">
                <NuxtLink :to="data.link" class="flex gap-1 items-center group">
                    <span class="text-[#C147E9] transform group-hover:mr-2 duration-300">
                        {{ $t('try_now') }}
                    </span>
                    <Icon name="ic:baseline-keyboard-arrow-right" class="w-6 h-6 text-[#C147E9]"/>
                </NuxtLink>
            </div>
        </div>

    </div>

    <span class="mt-12 mb-6 text-2xl text-white font-bold">
        {{ $t('course').slice(0, -1) }}
    </span>

    <CardCourse />

    <span class="mt-12 text-2xl text-white font-bold">
        {{ $t('buttons-generator') }}
    </span>
    <div class="flex flex-col mt-4 mb-10 w-full">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4 relative z-30 lg:mr-4">
            <NuxtLink
            aria-label="click_button"
            :to="localePath('buttons')"
            class="text-center" 
            v-for="data in buttons.slice(0, 6)" :key="data.id" :class="data.component.className">
            {{ $t('click_me') }}
        </NuxtLink>
        </div>
    </div>


    <Footer />
    
    </div>
</template>

<style>
.card-course {
    border-radius: 6px;
    background: linear-gradient(316deg, #2D033B 0%,
     rgba(193, 71, 233, 0.82) 100%);
}
</style>

<script setup lang="ts">
const resources = await useResources()
const buttons = await useButtons()
const locale=  useState('locale.setting')
</script>