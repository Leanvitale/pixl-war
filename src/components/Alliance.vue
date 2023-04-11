<template>
    <section class="fullpage text-center text-white">
        <Title>Alliance with<br />Color.sale</Title>

        <Paragraph>
            We've formed an alliance with the <a class="logo border-b-2" href="https://color.sale" target="_blank">color.sale</a> collection
            to use their NFTs in this event. This collection stands out for having 16,777,216 unique NFTs, ensuring enough colors for all
            participants. Each color is unique, as the collection has generated all hexadecimal colors without repetition.
        </Paragraph>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Paragraph from '../ui/Paragraph.vue'
import Title from '../ui/Title.vue'

export default defineComponent({
    name: 'AllianceSection',
    components: {
        Paragraph,
        Title,
    },
})
</script>

<style lang="scss" scoped>
</style>