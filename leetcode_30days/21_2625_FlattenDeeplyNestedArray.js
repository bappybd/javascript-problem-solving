/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let flatArray = [];

    function helper(arr, depth){
        for(let i=0; i<arr.length; i++) {
            if (Array.isArray(arr[i]) && depth < n){
                helper(arr[i], depth + 1);
            } else {
                flatArray.push(arr[i]);
            }            
        }

        return flatArray;
    }

    return helper(arr, 0);
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr, 2));