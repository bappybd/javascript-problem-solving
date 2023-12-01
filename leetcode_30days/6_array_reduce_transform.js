const fn = (acc, cur) => acc + cur;

var reduce = function(arr, fn, init) {
    let acc = 0;
    for (const i in arr) {
        acc = fn(acc, arr[i]);
    }

    return acc;
}

const arr = [1, 2, 7, 4, 5];
console.log(reduce(arr, fn, 0));