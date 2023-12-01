const sum = function (arr) {
    // let flattenedArray = arr.flat(Infinity);
    let flattenedArray = deepFlatten(arr, Infinity)
    console.log(arr)
    console.log(flattenedArray)
}

var deepFlatten = (arr, depth = 1) => {
    return depth > 0 
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ?
     deepFlatten(val, depth - 1) 
     : val), [])                 
    : arr.slice();
 }

const inputArray = [1, [3,2], 11, 7, [[[[6]]]]];
sum(inputArray);