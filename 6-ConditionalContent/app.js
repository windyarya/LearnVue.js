const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            listVisibility: true
        }
    },
    computed: {
        isListVisible() {
            return this.listVisibility ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        btnListVisibility() {
            this.listVisibility = !this.listVisibility;
        }
    },
});

app.mount('#assignment');