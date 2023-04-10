<template>
    <section class="fullpage text-white">
        <Title>Rules of the Game</Title>

        <Paragraph>
            <ol>
                <li class="mb-3">
                    <span class="logo">*</span> We will be based on the famous game that took place on Reddit (Reddit Place).
                </li>
                <li class="mb-3"><span class="logo">*</span> All participants can paint 1 pixel at a time.</li>
                <li class="mb-3">
                    <span class="logo">*</span> There will be an initial delay time of 1 minute per pixel, which will increase as we
                    approach the end of the event, up to a maximum of 5 minutes.
                </li>
                <li class="mb-3">
                    <span class="logo">*</span> Pixels can be accumulated up to a maximum of 10, and then used without delay.
                </li>
                <li class="mb-3">
                    <span class="logo">*</span> The colors to be used are NFTs from the Color Sale collection. Participants must acquire
                    their colors to participate in the tournament, which can be obtained through their Mint or secondary markets.
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