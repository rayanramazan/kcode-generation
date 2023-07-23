<template>
    <div class="lg:mr-4">
        <div class="flex justify-center items-center gap-8 sm:gap-20 flex-wrap mt-26 lg:p-0 p-4 mb-4 w-full" style="z-index: 999;">
            <div class="flex flex-col gap-2 items-start">
                <span class="text-white">
                    {{ $t('charachter') }}
                </span>

                <div class="flex items-center gap-10">
                    <button
                        :disabled="char >= 7531"
                        @click="char += 10"
                        class="border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary duration-200 text-xl w-[30px] h-[30px] rounded">
                        +
                    </button>
                    <input type="number" v-model="char" class="text-white text-center bg-transparent border-0 outline-none ring-0" />
                    <button
                        @click="char -= 10"
                        class="border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary duration-200 text-xl w-[30px] h-[30px] rounded">
                        -
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-2 items-start">
                <span class="text-white">
                    {{ $t('paragraph') }}
                </span>
                <div class="flex items-center gap-10">
                    <button
                        @click="paragraph++"
                        class="border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary duration-200 text-xl w-[30px] h-[30px] rounded">
                        +
                    </button>
                    <input type="number" v-model="paragraph" class="text-white text-center bg-transparent border-0 outline-none ring-0" />
                    <button
                        @click="paragraph--"
                        class="border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary duration-200 text-xl w-[30px] h-[30px] rounded">
                        -
                    </button>
                </div>
            </div>
        </div>


        <div 
            v-for="data in text" :key="data.id"
            class="w-full bg-secondary/10 text-justify mt-10 p-4 lg:mr-4 rounded text-secondary">
            <div v-for="i in paragraph" :key="i">
                {{ data.english.slice(0, char) }}
            </div>
        </div>

        <Footer />
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