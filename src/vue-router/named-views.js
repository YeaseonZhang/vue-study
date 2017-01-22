const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Yea = { template: '<div>Yea</div>' }

const router = new VueRouter({
    //mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                default: Foo,
                a: Bar,
                b: Yea
            }
        },
        {
            path: '/other',
            components: {
                default: Yea,
                a: Bar,
                b: Foo
            }
        }
    ]
})

const app = new Vue({
    router,
    el: '#app'
})
