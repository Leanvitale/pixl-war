<template>
    <section class="fullpage text-center text-white">
        <Title>The Event</Title>

        <Paragraph>
            <span class="logo">Pixl War</span> aims to bring together leaders and communities from the Blockchain sector to create the
            largest collaborative artwork in history. The idea is to capture the presence of the industry's main players on a giant canvas,
            allowing communities, teams, and collections to paint one pixel at a time. Once the event is over, the artwork will be frozen
            and two NFTs will be created, one on the Blockchain network and the other on the Ethereum network, which will be auctioned off.
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