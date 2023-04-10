<template>
    <section class="fullpage text-center text-white">
        <Title>Alliance with<br />Color.sale</Title>

        <Paragraph>
            We have made an alliance with the
            <a class="logo border-b-2" href="https://color.sale" target="_blank">color.sale</a>
            collection to use their NFTs in this event. This collection has the particularity of having a number of 16,777,216 NFTs,
            ensuring that there are enough colors for all participants. All colors are unique because this collection has generated all the
            Hexadecimal colors without repetitions.
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