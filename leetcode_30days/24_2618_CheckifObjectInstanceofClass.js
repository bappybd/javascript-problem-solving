/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    } 

    let currProto = Object.getPrototypeOf(obj);
    while(currProto !== null) {
        if (currProto === classFunction.prototype) {
            return true;
        }

        currProto = Object.getPrototypeOf(currProto);
    }
        
    return false;
};


console.log(checkIfInstanceOf(new Date(), Date)) // true
console.log(checkIfInstanceOf(5, Number)) // true
console.log(checkIfInstanceOf('', String)) // true
class Animal {};
class Dog extends Animal {};
console.log(checkIfInstanceOf(new Dog(), Animal)); // true

console.log(checkIfInstanceOf(5, String)) // false
console.log(checkIfInstanceOf('', Number)) // false
