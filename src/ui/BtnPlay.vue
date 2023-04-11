<template>
    <span class="text-xl tiny-play-btn">
        <img src="../assets/img/enter.svg" alt="Go to Event" class="h-6 w-6" v-if="isMobile" />
        <span v-else>Play the Event</span>
    </span>
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