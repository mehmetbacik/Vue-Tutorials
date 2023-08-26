const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        };
    },
    methods: {
        /*getCounterResult() {
            console.log("Counter 1 Work");
            return this.counter > 5 ? 'Big' : 'Small';
        },
        getCounter2Result() {
            console.log("Counter 2 Work");
            return this.counter2 > 5 ? 'Big' : 'Small';
        },*/
    },
    computed: {
        getCounterResult() {
            console.log("Counter 1 Work");
            return this.counter > 5 ? 'Big' : 'Small';
        },
        getCounter2Result() {
            console.log("Counter 2 Work");
            return this.counter2 > 5 ? 'Big' : 'Small';
        },
    },
    watch: {
        counter(newValue, oldValue) {
            console.log("Counter", oldValue, "=>", newValue);
        },
        getCounterResult(newValue, oldValue) {
            console.log("Result", oldValue, "=>", newValue);
        },
        counter2(newValue, oldValue) {
            console.log("Counter2", oldValue, "=>", newValue);
        },
        getCounter2Result(newValue, oldValue) {
            console.log("Result2", oldValue, "=>", newValue);
        },
    },
    /*methods: {
        inc() {
            this.counter++;
        },
        dec() {
            this.counter--;
        },
    },*/

}).mount("#app");