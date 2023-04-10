<template>
    <h2 class="text-white text-2xl lg:text-6xl mb-4 logo tracking-tighter"><slot></slot></h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Title',
})
</script>

<style lang="scss" scoped>
</style>