<template>
    <p class="text-lg lg:text-2xl pt-3 lg:pt-8 max-w-4xl mx-auto text-left tracking-wider">
        <slot></slot>
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Paragraph',
})
</script>

<style lang="scss" scoped>
</style>