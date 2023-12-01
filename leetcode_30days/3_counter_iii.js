const createCounter = function(n) {
    let counter = n;

    return {
        increment: function() {
            return ++counter;
        },
        decrement: function() {
            return --counter;
        },
        reset: function() {
            counter = n;
            return counter;
        }
    }
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());