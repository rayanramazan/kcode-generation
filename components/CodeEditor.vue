<template>
    <codemirror
        dir="ltr"
        v-model="props.code"
        :style="{ height: '600px', fontSize: '16px'}"
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
</script>