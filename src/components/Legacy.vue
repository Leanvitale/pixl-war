<template>
    <section class="fullpage text-center text-white">
        <Title>Our Legacy</Title>

        <Paragraph>
            Get ready for <span class="logo">Pixl War</span>, an epic event that will unite Blockchain communities in creating the most
            spectacular collaborative artwork of all time, tracing a visual timeline of industry leaders! Together, we'll capture the
            essence of the key players in the Blockchain ecosystem on a colossal canvas, where communities, teams, and collections can paint
            pixel by pixel, leaving their legacy in blockchain history. As time goes by, we'll witness the evolution, growth, impact, and
            changes of these communities, highlighting those that have endured, grown, or vanished. Pixl War will be held annually,
            immortalizing the leading players in the blockchain at that time and turning the artwork into two NFTs for the Bitcoin and
            Ethereum networks. Thus, as we contemplate the NFTs generated over time, we can easily appreciate the evolution of the
            blockchain ecosystem. The thrilling NFTs mentioned will be auctioned off at the end of each event, allowing the community to
            acquire and treasure them. Don't miss out!
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