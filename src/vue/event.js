var event1 = new Vue({
    el: '#event-1',
    data: {
        counter: 0
    }
})

var event2 = new Vue({
    el: '#event-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            console.log('Hello ' + this.name + '!');
            console.log(event.target.tagName);
        }
    }
})

var event3 = new Vue({
    el: '#event-3',
    methods: {
        say: function (message) {
            console.log(message);
        },
        warn: function (message, event) {
            console.log(event);
            if (event) 
                event.preventDefault()
            console.log(message);
        }

    }
})