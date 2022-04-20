let vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100,
            this.rotateX = 0,
            this.rotateY = 0,
            this.rotateZ = 0

            const reset = document.getElementById('reset')
            reset.style.backgroundColor = 'green'
            reset.textContent = 'Reseted!'
            setTimeout(() => {
                reset.style.backgroundColor = '#8d81f3'
                reset.textContent = 'Reset!'
            }, 1500)
        },
        copy() {
            const el = document.createElement('textarea')

            el.setAttribute('readonly', '')
            el.style.position = 'absolute'
            el.style.left = '-999px'
            el.value = `transform: ${this.box.transform}`

            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)

            const btn = document.getElementById('copy')
            btn.style.backgroundColor = 'green'
            btn.textContent = 'Copied!'
            setTimeout(() => {
                btn.style.backgroundColor = '#8d81f3'
                btn.textContent = 'Copy!'
            }, 1500)
        }
    }
}).mount('#app');