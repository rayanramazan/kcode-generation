<template>
    <div class="w-full mt-26 lg:mx-0 p-4">
        <span class="mt-8 text-xl md:text-2xl text-white font-bold">
       {{ $t('3d-transform') }}
    </span>
    <div class="box">
        <div class="cube-wrap">
            <div :style="`transform: scaleX(${ranges[0].value}) scaleY(${ranges[1].value}) scaleZ(${ranges[2].value}) rotateX(${ranges[3].value}deg) rotateY(${ranges[4].value}deg) rotateZ(${ranges[5].value}deg) translateX(${ranges[6].value}px) translateY(${ranges[7].value}px) translateZ(${ranges[8].value}px) skewX(${ranges[9].value}deg) skewY(${ranges[10].value}deg);`"
                class="cube">
                <div class="front">
                    {{ $t('front') }}
                </div>
                <div class="back">
                    {{ $t('back') }}
                </div>
                <div class="top">
                    {{ $t('top') }}
                </div>
                <div class="bottom">
                    {{ $t('bottom') }}
                </div>
                <div class="left">
                    {{ $t('left') }}
                </div>
                <div class="right">
                    {{ $t('right') }}
                </div>
            </div>
        </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-30 mb-10">
        <div v-for="range in ranges" :key="range.id" class="flex flex-col gap-2">
            <span class="text-white">
                {{ range.title }}
            </span>
            <input class="rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full" type="range" :min="range.min"
                :max="range.max" :step="range.steps" v-model="range.value" />
        </div>
    </div>

    <CodeEditor :code="`<div class='box'>\n   <div class='cube-wrap'>\n     <div class='cube'>\n          <div class='front'>\n              Front\n          </div>\n          <div class='back'>\n              Back\n          </div>\n          <div class='top'>\n              Top\n          </div>\n          <div class='bottom'>\n              Bottom\n          </div>\n          <div class='left'>\n              Left\n          </div>\n          <div class='right'>\n              Right\n          </div>\n      </div>\n   </div>\n</div>`" />
        <br>
    <CodeEditor
        :code="`.cube {\n   transform: scaleX(${ranges[0].value})\n   scaleY(${ranges[1].value})\n   scaleZ(${ranges[2].value})\n   rotateX(${ranges[3].value}deg)\n   rotateY(${ranges[4].value}deg)\n   rotateZ(${ranges[5].value}deg)\n   translateX(${ranges[6].value}px)\n   translateY(${ranges[7].value}px)\n   translateZ(${ranges[8].value}px)\n   skewX(${ranges[9].value}deg)\n   skewY(${ranges[10].value}deg);\n}`" />

    <Footer />
    </div>
    
</template>

<script setup lang="ts">
const ranges = ref([
    {
        id: 1,
        title: 'ScaleX',
        value: 1,
        min: -3,
        max: 3,
        steps: 0.1
    },
    {
        id: 2,
        title: 'ScaleY',
        value: 1,
        min: -3,
        max: 3,
        steps: 0.1
    },
    {
        id: 3,
        title: 'ScaleZ',
        value: 1,
        min: -3,
        max: 3,
        steps: 0.1
    },
    {
        id: 4,
        title: 'rotateX',
        value: 44,
        min: -365,
        max: 365,
        steps: 1
    },
    {
        id: 5,
        title: 'rotateY',
        value: -40,
        min: -365,
        max: 365,
        steps: 1
    },
    {
        id: 6,
        title: 'rotateZ',
        value: 0,
        min: -365,
        max: 365,
        steps: 1
    },
    {
        id: 7,
        title: 'translateX',
        value: 0,
        min: -100,
        max: 100,
        steps: 1
    },
    {
        id: 8,
        title: 'translateY',
        value: 0,
        min: -100,
        max: 100,
        steps: 1
    },
    {
        id: 9,
        title: 'translateZ',
        value: 0,
        min: -100,
        max: 100,
        steps: 1
    },
    {
        id: 10,
        title: 'skewX',
        value: 0,
        min: -180,
        max: 180,
        steps: 1
    },
    {
        id: 11,
        title: 'skewY',
        value: 0,
        min: -180,
        max: 180,
        steps: 1
    },
    {
        id: 12,
        title: 'skewZ',
        value: 0,
        min: -180,
        max: 180,
        steps: 1
    },
])
</script>
