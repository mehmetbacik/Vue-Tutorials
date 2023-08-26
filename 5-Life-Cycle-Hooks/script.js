const app = Vue.createApp({
    data(){
        return {
            title: "Title",
            itemList: [],
        };
    },
    beforeCreate(){
        console.log("beforeCreate Work");
    },
    created(){
        console.log("created Work");
        setTimeout(() => {
            this.itemList = [1,2,3,4,5,6,7,8];
        }, 2000);

        setTimeout(() => {
            this.title="New Title";
        }, 3000);
    },
    beforeMount(){
        console.log("beforeMount Work");
    },
    mounted(){
        console.log("mounted Work");
    },
    beforeUpdate(){
        console.log("beforeUpdate Work");
    },
    updated(){
        console.log("updated Work");
    },
    beforeUnmount(){
        console.log("beforeUnmount Work");
    },
    unmounted(){
        console.log("unmounted Work");
    },
});
app.mount("#app");

setTimeout(() => {
    app.unmount();
}, 5000);

// const app2 = Vue.createApp({})