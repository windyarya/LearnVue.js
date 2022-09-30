const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            pVisibility: true,
            inputBgColour: ''
        }
    },
    computed: {
        paragrafClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.pVisibility,
                hidden: !this.pVisibility
            }
        }
    },
    methods: {
        toggleVisibility() {
            this.pVisibility = !this.pVisibility;
        }
    },
});

app.mount('#assignment');