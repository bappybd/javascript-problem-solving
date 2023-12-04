/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    for(let i = 0; i < arr.length; i+=size) {
        res.push(arr.slice(i, i + size));
    }

    return res;
};

console.log(chunk([1,2,3,4,5,6,7,8,9], 2));
console.log(chunk([1,2,3,4,5,6,7,8,9], 4));
