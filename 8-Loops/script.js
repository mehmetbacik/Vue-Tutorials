const app = Vue.createApp({
    data(){
        return {
            todoList :  [
                {id: 1, text: "Todo1", completed: false},
                {id: 2, text: "Todo2", completed: false},
                {id: 3, text: "Todo3", completed: false},
                {id: 4, text: "Todo4", completed: false},
                {id: 5, text: "Todo5", completed: false},
                {id: 6, text: "Todo6", completed: false},
                {id: 7, text: "Todo7", completed: false},
            ],
        };
    },
    methods : {
        addTodo(event) {
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false,
            });
            event.target.value = "";
        },
        removeItem(todoItem) {
            this.todoList = this.todoList.filter(todo => todo !== todoItem);
        },
    },
    computed : {
        completedItemCount(){
            return this.todoList.filter((t) => t.completed).length;
        },
        unCompletedItemCount(){
            return this.todoList.filter((t) => !t.completed).length;
        },
    },
});
app.mount("#app")