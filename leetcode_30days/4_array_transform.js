const plusOne = (n, i) => n + i;

const map = function(arr, fn) {
    for(let i=0; i<arr.length ;i++) {
        arr[i] = fn(arr[i], i);
    }

    return arr;
}

const data = [1, 2, 3];
console.log(map(data, plusOne));