<script lang="ts">
import Hero from './components/Hero.vue'
import Event from './components/Event.vue'
import Rules from './components/Rules.vue'
import Alliance from './components/Alliance.vue'
import Time from './components/Time.vue'
import Points from './components/Points.vue'
import CTA from './components/CTA.vue'
import Navbar from './components/Navbar.vue'
import BtnPlay from './ui/BtnPlay.vue'

export default {
    components: {
        Hero,
        Event,
        Rules,
        Alliance,
        Time,
        Points,
        CTA,
        Navbar,
        BtnPlay,
    },
    data() {
        return {
            activeSection: 0,
            options: {
                anchors: ['PixlWar', 'Event', 'Rules', 'Alliance', 'Time', 'Points', 'CTA'],
                beforeLeave: this.beforeLeave,
            },
        }
    },
    methods: {
        beforeLeave(origin: any, destination: any) {
            this.activeSection = destination.index
        },
    },
}
</script>

<template>
    <div class="relative">
        <Navbar class="absolute" :slide="activeSection" />
        <full-page ref="fullpage" :options="options" id="fullpage" class="-mt-[100px]">
            <Hero class="section" />
            <Event class="section" />
            <Rules class="section" />
            <Alliance class="section" />
            <Time class="section" />
            <Points class="section" />
            <CTA class="section" />
        </full-page>
        <!-- Desktop Slide position -->
        <div class="sections-menu max-md:hidden">
            <a :href="`#${offset}`" v-for="(offset, index) in options.anchors" v-bind:key="index">
                <span class="menu-point" v-bind:class="{ active: activeSection == index }"> </span>
            </a>
        </div>

        <!-- CTA to Play in Mobile -->
        <div class="flex sticky bottom-0 z-20 py-8 px-4 justify-center max-w-7xl m-auto text-white w-full md:hidden">
            <BtnPlay />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fp-watermark {
    display: none;
}
</style>