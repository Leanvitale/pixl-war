<template>
    <section class="fullpage text-center text-white">
        <Title>Canvas Growth</Title>

        <Paragraph>
            <ol>
                <li class="mb-3">
                    <span class="logo">*</span> Start with an initial canvas size of 640 x 360 pixels for pixel-by-pixel drawing.
                </li>
                <li class="mb-3">
                    <span class="logo">*</span> Expand the canvas in 4 stages, increasing its size by 320 x 180 pixels each time.
                </li>
                <li class="mb-3"><span class="logo">*</span> Reach a final canvas size of 1920 x 1080 pixels after all expansions.</li>
                <li class="mb-3">
                    <span class="logo">*</span> Preserve the existing artwork during each expansion, as new pixels will be added to the
                    sides.
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
    name: 'CanvasSection',
    components: {
        Paragraph,
        Title,
    },
})
</script>

<style lang="scss" scoped>
</style>