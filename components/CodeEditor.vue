<template>
    <codemirror
        class="custom-scrollbar bg-transparent"
        v-model="props.code"
        :style="{ height: '600px', fontSize: '16px', scrollbarWidth: 'thin', scrollbarColor: '#000000 #000000' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @ready="handleReady"
  />
</template>

<script setup lang="ts">
import { EditorState } from '@codemirror/state'
import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { oneDark } from '@codemirror/theme-one-dark'

const extensions = [css(), oneDark]

const props = defineProps({
    code: String,
    lang: String
})


const view = shallowRef()
const handleReady = (payload: { view: any }) => {
    view.value = payload.view
}
const getCodemirrorStates = () => {
    const state = view.value.state
    const ranges = state.selection.ranges
    const selected = ranges.reduce((r: any, range: { to: any;from: number }) => r + range.to - range.from, 0)
    const cursor = ranges[0].anchor
    const length = state.doc.length
    const lines = state.doc.lines
}
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
  background-color: tomato !important;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f7f7f7;
}
</style>