export default {
    increment(state) {
        state.counter++;
    },
    increase(state, num) {
        state.counter = state.counter + num.value;
    },
}