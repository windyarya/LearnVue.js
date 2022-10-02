const app = Vue.createApp({
    data() {
        return {
            name1: '',
            name2: '',
            confName: ''
        };
    },

    methods: {
        subBtn() {
            alert('Button Pressed!');
        },

        funcName(event) {
            this.name1 = event.target.value;
        },

        funcName2(event) {
            this.name2 = event.target.value;
        },

        confirmName() {
            this.confName = this.name2;
        },
    },
})

app.mount('#assignment');