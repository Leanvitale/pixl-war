<script lang="ts">
import Hero from './components/Hero.vue'
import Legacy from './components/Legacy.vue'
import Rules from './components/Rules.vue'
import Alliance from './components/Alliance.vue'
import Time from './components/Time.vue'
import Points from './components/Points.vue'
import CTA from './components/CTA.vue'
import Navbar from './components/Navbar.vue'
import Canvas from './components/Canvas.vue'
import Preloader from './components/Preloader.vue'

export default {
    components: {
        Hero,
        Legacy,
        Rules,
        Alliance,
        Time,
        Points,
        Canvas,
        CTA,
        Navbar,
        Preloader,
    },
    data() {
        return {
            activeSection: 0,
            showPreloader: true,
            options: {
                licenseKey: 'gplv3-license',
                anchors: ['PixlWar', 'Legacy', 'Alliance', 'Rules', 'Canvas', 'Time', 'Points', 'CTA'],
                beforeLeave: this.beforeLeave,
                responsiveWidth: 640,
            },
        }
    },
    mounted() {
        setTimeout(() => {
            this.showPreloader = false
        }, 1800)
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
    <Preloader v-if="showPreloader" class="z-20" />
    <div class="relative opacity-0 ease-in-out duration-500 z-10" :class="{ 'opacity-100': !showPreloader }">
        <Navbar class="absolute" :slide="activeSection" :isMobile="isMobile" />
        <full-page ref="fullpage" :options="options" id="fullpage" class="-mt-[100px]">
            <Hero class="section" />
            <Legacy class="section" />
            <Alliance class="section" />
            <Rules class="section" />
            <Canvas class="section" />
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