<template>
    <span class="mt-8 text-2xl text-white font-bold">
        Color Swatches
    </span>
    <div class="box">
        <div class="cube-wrap">
            <div :style="`transform: scaleX(${ranges[0].value}) scaleY(${ranges[1].value}) scaleZ(${ranges[2].value}) rotateX(${ranges[3].value}deg) rotateY(${ranges[4].value}deg) rotateZ(${ranges[5].value}deg) translateX(${ranges[6].value}px) translateY(${ranges[7].value}px) translateZ(${ranges[8].value}px) skewX(${ranges[9].value}deg) skewY(${ranges[10].value}deg);`"
                class="cube">
                <div class="front">
                    Front
                </div>
                <div class="back">
                    Back
                </div>
                <div class="top">
                    Top
                </div>
                <div class="bottom">
                    Bottom
                </div>
                <div class="left">
                    Left
                </div>
                <div class="right">
                    Right
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
        :code="`.cube {   transform: scaleX(${ranges[0].value}) scaleY(${ranges[1].value}) scaleZ(${ranges[2].value}) rotateX(${ranges[3].value}deg) rotateY(${ranges[4].value}deg) rotateZ(${ranges[5].value}deg) translateX(${ranges[6].value}px) translateY(${ranges[7].value}px) translateZ(${ranges[8].value}px) skewX(${ranges[9].value}deg) skewY(${ranges[10].value}deg);}`" />
</template>

<style>
.cube {
    margin: auto;
    margin-top: 6rem;
    position: relative;
    height: 200px;
    width: 200px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(45deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg);
}

/* .cube-wrap {
    perspective: 1000px;
    perspective-origin: 50% 50%;
} */

.cube div {
    position: absolute;
    box-sizing: border-box;
    /* padding: 10px; */
    line-height: 200px;
    text-align: center;
    height: 100%;
    width: 100%;
    opacity: 0.9;
    border: 1px solid #000;
    color: #000;
    font-weight: bold;
}

.front {
    -webkit-transform: translateZ(100px);
    transform: translateZ(100px);
    background-color: #3BA676;
}

.back {
    -webkit-transform: translateZ(-100px) rotateY(180deg);
    transform: translateZ(-100px) rotateY(180deg);
    background-color: #4BBF8B;
}

.top {
    -webkit-transform: rotateX(-270deg) translateY(-100px);
    transform: rotateX(-270deg) translateY(-100px);
    transform-origin: top center;
    background-color: #69CA9E;
}

.bottom {
    -webkit-transform: rotateX(270deg) translateY(100px);
    transform: rotateX(270deg) translateY(100px);
    transform-origin: bottom center;
    background-color: #87D4B2;
}

.left {
    -webkit-transform: rotateY(270deg) translateX(-100px);
    transform: rotateY(270deg) translateX(-100px);
    transform-origin: center left;
    background-color: #A5DFC5;
}

.right {
    -webkit-transform: rotateY(-270deg) translateX(100px);
    transform: rotateY(-270deg) translateX(100px);
    transform-origin: top right;
    background-color: #B4E4CF;
}
</style>

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
        value: 0,
        min: -365,
        max: 365,
        steps: 1
    },
    {
        id: 5,
        title: 'rotateY',
        value: 0,
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