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
                responsiveWidth: 640,
            },
        }
    },
    methods: {
        beforeLeave(origin: any, destination: any) {
            this.activeSection = destination.index
        },
    },
    computed: {
        isMobile(): boolean {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
    },
}
</script>

<template>
    <div class="relative">
        <Navbar class="absolute" :slide="activeSection" :isMobile="isMobile" />
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
        <div class="sections-menu max-sm:hidden" v-if="!isMobile">
            <a :href="`#${offset}`" v-for="(offset, index) in options.anchors" v-bind:key="index">
                <span class="menu-point" v-bind:class="{ active: activeSection == index }"> </span>
            </a>
        </div>
    </div>
</template>