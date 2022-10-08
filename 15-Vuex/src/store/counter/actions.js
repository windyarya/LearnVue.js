export default {
    increment(context) {
        setTimeout(function() {
            context.commit('increment');
        }, 2000);
    },
    increase(context, num) {
        setTimeout(function() {
            context.commit('increase', num);
        }, 1000);
    },
}