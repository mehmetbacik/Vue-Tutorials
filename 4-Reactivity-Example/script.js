const app = Vue.createApp({
    data () {
        return {
            search: "",
            itemList: ["apple", "pear", "cherry", "strawberry"],
            //filteredList: [],
        };
    },
    methods: {
        searchList () {
            //this.filteredList = this.itemList.filter((i) => i.includes(this.search));
        },
    },
    computed: {
        filteredList(){
            return this.itemList.filter((i) => i.includes(this.search));
        },
    },
})
app.mount("#app");