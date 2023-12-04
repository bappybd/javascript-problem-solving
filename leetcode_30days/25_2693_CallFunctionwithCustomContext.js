/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
/* Function.prototype.callPolyfill = function(context, ...args) {
	return this.apply(context, [...args])
} */

Function.prototype.callPolyfill = function(context, ...args) {
    const fn = this;
  
    Object.defineProperty(context, '__fn__', {
      value: fn,
      enumerable: false
    });
  
    const result = context.__fn__(...args);
  
    delete context.__fn__;
  
    return typeof result !== 'undefined' ? result : undefined;
  };

function increment() { this.count++; return this.count; }
console.log(increment.callPolyfill({count: 1})); // 2
