<template>
    <section class="fullpage text-center text-white">
        <Title>Time of the event</Title>

        <Paragraph>
            <ol>
                <li class="mb-3"><span class="logo">*</span> The event starts on <span class="logo">May 1st</span>.</li>
                <li class="mb-3"><span class="logo">*</span> Its duration will be one week once the canvas has been completely painted.</li>
                <li class="mb-3">
                    <span class="logo">*</span> After that time, the event will be paused and the canvas will be captured in its current
                    state to turn it into an NFT and preserve it for posterity.
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