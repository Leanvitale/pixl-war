<template>
    <section class="fullpage text-center text-white">
        <Title>Points</Title>

        <Paragraph>
            Painting on the canvas earns points, with each pixel painted worth 1 point for the participant. These points will be used later
            for an airdrop to be held in the future.
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