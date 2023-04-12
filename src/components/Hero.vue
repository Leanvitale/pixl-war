<script lang="ts">
export default {
    name: 'ConsoleText',
    mounted() {
        this.consoleText(['by the ecosystem.', 'for all of us.', 'by you.', 'to last in time.', 'with love.'], 'console', [
            '#845EC2',
            '#D65DB1',
            '#FF6F91',
            '#FF9671',
            '#FFC75F',
        ])
    },
    methods: {
        consoleText(words: any, id: any, colors: any) {
            if (colors === undefined) colors = ['#fff']
            let visible = true
            let con = this.$refs.puntero as HTMLElement
            let letterCount = 1
            let x = 1
            let waiting = false
            let target = document.getElementById(id) as HTMLElement
            target?.setAttribute('style', 'color:' + colors[0])
            window.setInterval(function () {
                if (letterCount === 0 && waiting === false) {
                    waiting = true
                    target.innerHTML = words[0].substring(0, letterCount)
                    window.setTimeout(function () {
                        let usedColor = colors.shift()
                        colors.push(usedColor)
                        let usedWord = words.shift()
                        words.push(usedWord)
                        x = 1
                        target?.setAttribute('style', 'color:' + colors[0])
                        letterCount += x
                        waiting = false
                    }, 1000)
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true
                    window.setTimeout(function () {
                        x = -1
                        letterCount += x
                        waiting = false
                    }, 1000)
                } else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount)
                    letterCount += x
                }
            }, 80)

            window.setInterval(function () {
                if (visible === true) {
                    con.className = 'console-underscore hidden'
                    visible = false
                } else {
                    con.className = 'console-underscore'
                    visible = true
                }
            }, 400)
        },
    },
}
</script>

<template>
    <section class="flex h-[85vh] md:h-screen w-full flex-col justify-center items-center">
        <h1 class="logo text-[43px] lg:text-9xl lg:-tracking-[1rem] text-white">Pixl War</h1>
        <p class="text-lg lg:text-3xl mt-2 lg:mt-5 text-white text-center">
            The biggest artwork in Blockchain history,<br />created
            <span id="console"></span>
            <span ref="puntero">&#95;</span>
        </p>
        <img src="../assets/img/arrow-down.svg" alt="" class="w-14 absolute top-[calc(100vh-150px)] z-20 arrow left-0 right-0 mx-auto" />
    </section>
</template>

<style lang="scss" scoped>
.hidden {
    opacity: 0;
}
.console-underscore {
    display: inline-block;
    position: relative;
}

.arrow {
    animation: scrolldown 3s infinite;
}

@keyframes scrolldown {
    0% {
        top: calc(100vh - 130px);
    }

    50% {
        top: calc(100vh - 100px);
    }

    100% {
        top: calc(100vh - 130px);
    }
}

@media (max-width: 680px) {
    @keyframes scrolldown {
        0% {
            top: calc(90vh - 130px);
        }

        50% {
            top: calc(90vh - 100px);
        }

        100% {
            top: calc(90vh - 130px);
        }
    }
}
</style>