const counter = function(n) {
    return function() {
        return n++;
    }
}

const c = counter(10);
console.log(c());
console.log(c());
console.log(c());
console.log(c());