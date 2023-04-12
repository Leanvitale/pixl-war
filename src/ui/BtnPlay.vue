<template>
    <a class="text-xl btn-event flex justify-center items-center" href="https://play-pixl-war.on.fleek.co">
        <img src="../assets/img/enter.svg" alt="Go to Event" class="h-5 w-5" v-if="isMobile" />
        <span v-else>Play the Event</span>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BtnPlay',
    props: {
        isMobile: {
            type: Boolean,
        },
    },
})
</script>

<style lang="scss" scoped>
</style>