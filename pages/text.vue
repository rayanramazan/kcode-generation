<template>
    <div class="flex justify-center items-center gap-8 sm:gap-20 flex-wrap mt-8 mb-4 w-full" style="z-index: 999;">
        <div class="flex flex-col gap-2 items-center">
            <span class="text-white">
                {{ $t('charachter') }}
                <hr class="w-[150px] border-0 h-[1px] bg-white/10 mt-2">
            </span>

            <div class="flex items-center gap-10">
                <button
                    :disabled="char >= 7531"
                    @click="char += 10"
                    class="border border-primary text-primary hover:bg-primary hover:text-white duration-200 text-xl w-[30px] h-[30px] rounded">
                    +
                </button>
                <span class="text-white">
                    {{ char }}
                </span>
                <button
                    @click="char -= 10"
                    class="border border-primary text-primary hover:bg-primary hover:text-white duration-200 text-xl w-[30px] h-[30px] rounded">
                    -
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-2 items-center">
            <span class="text-white">
                {{ $t('paragraph') }}
                <hr class="w-[150px] border-0 h-[1px] bg-white/10 mt-2">
            </span>
            <div class="flex items-center gap-10">
                <button
                    @click="paragraph++"
                    class="border border-primary text-primary hover:bg-primary hover:text-white duration-200 text-xl w-[30px] h-[30px] rounded">
                    +
                </button>
                <span class="text-white">
                    {{ paragraph }}
                </span>
                <button
                    @click="paragraph--"
                    class="border border-primary text-primary hover:bg-primary hover:text-white duration-200 text-xl w-[30px] h-[30px] rounded">
                    -
                </button>
            </div>
        </div>
    </div>


    <div 
        v-for="data in text" :key="data.id"
        class="w-full bg-primary/10 text-justify mt-10 p-4 rounded text-primary">
        <div v-for="i in paragraph" :key="i">
            {{ data.english.slice(0, char) }}
        </div>
    </div>
</template>

<script setup lang="ts">
const text = await useText()

const char = ref(1000)
const paragraph = ref(1)

const incrementChar = () => {
      char.value++
}

const decrementChar = () => {
    char.value - 1
}

</script>