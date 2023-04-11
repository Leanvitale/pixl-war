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
            inMove: false,
            inMoveDelay: 400,
            activeSection: 0,
            offsets: [] as Number[],
            touchStartY: 0,
        }
    },
    methods: {
        /**
         * Calcaulates the absolute offsets of each section on the page and pushs it into the offsets array
         */
        calculateSectionOffsets() {
            let sections = document.getElementsByTagName('section')
            let length = sections.length

            for (let i = 0; i < length; i++) {
                let sectionOffset = sections[i].offsetTop
                this.offsets.push(sectionOffset)
            }
            this.scrollToSection(this.activeSection, true)
        },
        /**
         * Handle the 'mousewheel' event for other browsers
         */
        handleMouseWheel: function (e: any) {
            if (e.wheelDelta < 30 && !this.inMove) {
                this.moveUp()
            } else if (e.wheelDelta > 30 && !this.inMove) {
                this.moveDown()
            }

            e.preventDefault()
            return false
        },
        /**
         * Handle the 'DOMMouseScroll' event for Firefox
         */
        handleMouseWheelDOM: function (e: any) {
            if (e.detail > 0 && !this.inMove) {
                this.moveUp()
            } else if (e.detail < 0 && !this.inMove) {
                this.moveDown()
            }

            return false
        },
        /**
         * Move to the previous section or the last section if you're on the first section
         */
        moveDown() {
            if (this.activeSection > 0) {
                this.inMove = true
                this.activeSection--

                this.scrollToSection(this.activeSection, true)
            }
        },
        /**
         * Move to the next section or the first section if you're on the last section
         */
        moveUp() {
            if (this.activeSection < this.offsets.length - 1) {
                this.inMove = true
                this.activeSection++

                this.scrollToSection(this.activeSection, true)
            }
        },
        /**
         * Scrolls to the passed section id if the section exists and the delay is over
         */
        scrollToSection(id: number, force = false) {
            if (this.inMove && !force) return false

            this.activeSection = id
            this.inMove = true

            // get section and scroll into view if it exists
            let section = document.getElementsByTagName('section')[id]
            if (section) {
                document.getElementsByTagName('section')[id].scrollIntoView({ behavior: 'smooth' })
            }

            setTimeout(() => {
                this.inMove = false
            }, this.inMoveDelay)
        },
        /**
         * Handles the 'touchstart' event on mobile devices
         */
        touchStart(e: any) {
            e.preventDefault()

            this.touchStartY = e.touches[0].clientY
        },
        /**
         * Handles the 'touchmove' event on mobile devices
         */
        touchMove(e: any) {
            if (this.inMove) return false
            e.preventDefault()

            const currentY = e.touches[0].clientY

            if (this.touchStartY < currentY) {
                this.moveDown()
            } else {
                this.moveUp()
            }

            this.touchStartY = 0
            return false
        },
    },
    mounted() {
        this.calculateSectionOffsets()

        window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM) // Mozilla Firefox
        window.addEventListener('mousewheel', this.handleMouseWheel, {
            passive: false,
        }) // Other browsers

        window.addEventListener('touchstart', this.touchStart, { passive: false }) // mobile devices
        window.addEventListener('touchmove', this.touchMove, { passive: false }) // mobile devices
    },
    destroyed() {
        window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM) // Mozilla Firefox
        window.removeEventListener('touchstart', this.touchStart) // mobile devices
        window.removeEventListener('touchmove', this.touchMove) // mobile devices
    },
}
</script>

<template>
    <div>
        <Navbar :slide="activeSection" />
        <Hero />
        <Event />
        <Rules />
        <Alliance />
        <Time />
        <Points />
        <CTA />

        <!-- CTA to Play in Mobile -->
        <div class="flex sticky bottom-0 z-20 py-8 px-4 justify-center max-w-7xl m-auto text-white w-full md:hidden">
            <BtnPlay />
        </div>

        <!-- Desktop Slide position -->
        <div class="sections-menu max-md:hidden">
            <span
                class="menu-point"
                v-bind:class="{ active: activeSection == index }"
                v-on:click="scrollToSection(index)"
                v-for="(offset, index) in offsets"
                v-bind:key="index"
                v-title="'Go to section ' + (index + 1)"
            >
            </span>
        </div>
    </div>
</template>