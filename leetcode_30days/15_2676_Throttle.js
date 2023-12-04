/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var throttle = function (fn, t) {
    let isThrolled = false;
    let nextArgs = undefined

    return function (...args) {
        if (isThrolled) {
            nextArgs = args;
        } else{
            fn.apply(this, [...args]);
            isThrolled = true;
            setTimeout(helper, t);
        }

        function helper() {            
            if(nextArgs) {
                fn.apply(this, [...nextArgs]);
                nextArgs = undefined;
                isThrolled = true;
                setTimeout(helper, t)
            } else {
                isThrolled = false;
            }
        }
    }
}
const throttled = throttle(console.log, 1000);
throttled('hello');
throttled('hello 2');
throttled('hello 3');