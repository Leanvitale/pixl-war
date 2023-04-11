<template>
    <section class="fullpage text-center text-white">
        <Title>The Event</Title>

        <Paragraph>
            <span class="logo">Pixl War</span> aims to unite blockchain communities to create the largest collaborative artwork ever. The
            goal is to capture the essence of the industry's key players on a massive canvas, where communities, teams, and collections can
            paint one pixel at a time, leaving their mark on blockchain history. Once the event ends, the artwork will be preserved, and two
            NFTs will be created: one on the Bitcoin network and another on the Ethereum network. These NFTs will be auctioned off.
        </Paragraph>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Paragraph from '../ui/Paragraph.vue'
import Title from '../ui/Title.vue'

export default defineComponent({
    name: 'EventSection',
    components: {
        Paragraph,
        Title,
    },
})
</script>