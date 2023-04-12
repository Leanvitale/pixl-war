<template>
    <section class="fullpage text-center text-white">
        <Title>Event Timing</Title>

        <Paragraph>
            <ol>
                <li class="mb-3"><span class="logo">*</span> The event begins on <span class="logo">May 18th</span>.</li>
                <li class="mb-3">
                    <span class="logo">*</span> It will last for one week or until the canvas is completely painted, whichever comes first.
                </li>
                <li class="mb-3">
                    <span class="logo">*</span> After that time, the event will be paused, and the canvas will be captured in its current
                    state to be turned into an NFT and preserved for posterity.
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
    name: 'TimeSection',
    components: {
        Paragraph,
        Title,
    },
})
</script>

<style lang="scss" scoped>
</style>