/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId;
    
    return function(...args) {        
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {            
            fn.apply(this, [...args]);            
        }, t)
    }
};

const log = debounce(console.log, 100);
log('Hello');
log('Hello 2');
log('Hello 3');
