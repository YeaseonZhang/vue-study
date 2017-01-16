Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1
            this.$emit('increment') // 触发 increment 监听
        }
    },
})

new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})


Vue.component('button-counter', {
    template: '<div class="container">\
            <main>\
                <slot></slot>\
            </main>\
            <header>\
                <slot name="header"></slot>\
            </header>\
            <footer>\
                <slot name="footer"></slot>\
            </footer>\
        </div>>',
    data: function () {
        return {
        }
    },
    
})