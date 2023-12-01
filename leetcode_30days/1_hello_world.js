const createHelloWorld = function() {
    return function () {
        return "Hello World"
    }
}

const c = createHelloWorld();
console.log(c());