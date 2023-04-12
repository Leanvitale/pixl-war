<template>
    <section class="fullpage text-white">
        <Title>Rules of the Game</Title>

        <Paragraph>
            <ol>
                <li class="mb-3"><span class="logo">*</span> Join our event inspired by the popular "Reddit Place" on Reddit!</li>
                <li class="mb-3"><span class="logo">*</span> Get creative, painting one pixel at a time alongside fellow participants.</li>
                <li class="mb-3">
                    <span class="logo">*</span> Initially, there's a 1-min wait per pixel, but as the event nears its end, it maxes out at 5
                    mins.
                </li>
                <li class="mb-3"><span class="logo">*</span> Stock up on 10 pixels and use them instantly, with no waiting!</li>
                <li class="mb-3">
                    <span class="logo">*</span> Use NFTs from the
                    <a class="logo border-b-2" href="https://color.sale" target="_blank">color.sale</a> collection as your color palette.
                    Grab your colors and dive into the event fun!
                </li>
            </ol>
        </Paragraph>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Paragraph from '../ui/Paragraph.vue'
import Title from '../ui/Title.vue'

export default defineComponent({
    name: 'RulesSection',
    components: {
        Paragraph,
        Title,
    },
})
</script>

<style lang="scss" scoped>
</style>