const fn1 = (x) => x + 1;
const fn2 = (x) => x * x;

var compose = function(functions) {

    return function(x) {
        return functions.reduceRight((acc, f)=> f(acc), x)
    }

    /*return function(x) {
        for(const fn of functions.reverse()) {
            x = fn(x);
        }

        return x;
    }*/
}

const fn = compose([fn1, fn2]);
console.log(fn(4));