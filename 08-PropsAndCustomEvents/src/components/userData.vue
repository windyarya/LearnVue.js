<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Username:</label>
            <input type="text" v-model="enteredUName" />
        </div>
        <div>
            <label>Age:</label>
            <input type="number" v-model="enteredAge" />
        </div>
        <div>
            <button>Add User</button>
        </div>
    </form>
</template>

<script>
    export default {
        emits: ['add-user'],
        data() {
            return {
                enteredUName: '',
                enteredAge: null
            }
        },
        methods: {
            submitData() {
                this.$emit('add-user', this.enteredUName, this.enteredAge);
            }
        }
    }
</script>