
var areDeeplyEqual = function(o1, o2){ 
    // Null check
    if (o1 === null || o2 === null) {
        return o1 === o2;
    }

    // type check
    if (typeof o1 !== typeof o2) {
        return false;
    }

    // Primitive check
    if (typeof o1 !== 'object') {
        return o1 === o2;
    }

    // Array comparison
    if (Array.isArray(o1) || Array.isArray(o2)) {
        if (String(o1) !== String(o2)) {
            return false;
        }

        for (let i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) {
                return false;
            }
        }
    } else {
        // Object comparison
        if (Object.keys(o1).length !== Object.keys(o2).length) {
            return false;
        }

        for (const key in o1) {
            if (!areDeeplyEqual(o1[key], o2[key])) {
                return false
            }
        }
    }
   return true;
}


console.log(areDeeplyEqual(1, 1)); // Preimitives
console.log(areDeeplyEqual(null, null)); // Preimitives
console.log(areDeeplyEqual(undefined, undefined)); // Preimitives
console.log(areDeeplyEqual([1], [1])); // Arrays
console.log(areDeeplyEqual({a: 1, b:2}, {b: 2, a:1})); // Objects
console.log(areDeeplyEqual(null, {b: 2, a:2})); // False
console.log(areDeeplyEqual([undefined], {a: 1})); // False