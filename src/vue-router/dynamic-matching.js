const User = {
    template: '<div>User {{ $route.params.id }} {{ $route.params.age }}</div>',
    // 在复用组件的同时，对路由参数响应
    watch: {
        '$route' (to, from) {
            // 对路由变化做出反应
            console.log("to: %s, from: %s", to, from);
        }
    }
}

const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User },
        { path: '/user/:id/age/:age', component: User }
    ]
})

const app = new Vue({
    router
}).$mount('#app');