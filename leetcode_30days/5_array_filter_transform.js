const greaterThan10 = (n) => n > 10;

const filter = function(arr, fn) {
    const output = [];
    for(const i in arr) {
        const filterValue = fn(arr[i], Number(i));        
        if (filterValue) output.push(arr[i]);
    }

    return output;
}

const arr = [0, 10, 20, 30];
console.log(filter(arr, greaterThan10));