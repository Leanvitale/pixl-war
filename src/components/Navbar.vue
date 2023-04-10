<template>
    <div class="flex sticky top-0 z-20 py-8 px-4 max-w-7xl m-auto text-white w-full items-center">
        <span class="logo w-fit text-xl text-8bit-bold" v-if="slide && slide > 0">Pixl War</span>
        <span class="ml-auto text-xl cursor-pointer"><img src="../assets/img/twitter-logo.svg" alt="" class="h-7" /></span>

        <span class="text-xl pl-8 cursor-pointer"><img src="../assets/img/discord-logo.svg" alt="" class="h-9" /></span>
        <BtnPlay class="max-md:hidden ml-8" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnPlay from '../ui/BtnPlay.vue'

export default defineComponent({
    name: 'Navbar',
    props: {
        slide: {
            type: Number,
        },
    },
    components: {
        BtnPlay,
    },
})
</script>

<style lang="scss" scoped>
</style>