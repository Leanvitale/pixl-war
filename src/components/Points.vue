<template>
    <section class="fullpage text-center text-white">
        <Title>Points</Title>

        <Paragraph>
            <ol>
                <li class="mb-3">
                    <span class="logo">*</span> Painting on the canvas earns you points. Each pixel painted is worth 1 point.
                </li>
                <li class="mb-3"><span class="logo">*</span> These points will be used for a future airdrop event.</li>
            </ol>
        </Paragraph>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Paragraph from '../ui/Paragraph.vue'
import Title from '../ui/Title.vue'

export default defineComponent({
    name: 'PointSection',
    components: {
        Paragraph,
        Title,
    },
})
</script>

<style lang="scss" scoped>
</style>