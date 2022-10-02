const app = Vue.createApp({
    data() {
        return {
            nameA: 'Windy',
            ageA: 20,
            imgLink: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
    },

    methods: {
        age5() {
            return this.ageA + 5;
        },

        randNum() {
            return 'Favorite Number:' + " " + Math.random();
        }
    },
});

app.mount('#assignment');