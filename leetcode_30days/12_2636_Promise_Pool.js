/* Given an array of asynchronous functions functions and a pool limit n, 
   return an asynchronous function promisePool. 
   It should return a promise that resolves when all the input functions resolve.

   The Pool limit is defined as the maximum number of promises that can be pending at once. 
   promisePool should begin execution of as many functions as possible and continue executing 
   new functions when old promises resolve. promisePool should execute functions[i] then 
   functions[i + 1] then functions[i+2], etc. When the last promise resolves, promisePool 
   should also resolve.

   For example, if n = 1, promisePool will execute one function at a time in a series. However, 
   if n = 2, it first executes two functions. When either of the two functions resolves, a 3rd 
   function should be executed (if available), and so on until there are no functions left to execute.
   You can assume all functions never reject. It is acceptable for promisePool to return a promise 
   that resolves any value. 
*/

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
// TC: O(functions.length)
var promisePool = async function (functions, n) {
    return new Promise((resolve) => {
      let inProgress = 0, index = 0;
      function helper() {
        // base case
        if (index >= functions.length) {
          if (inProgress === 0) resolve();
          return;
        }
  
        while (inProgress < n && index < functions.length) {
          inProgress++;
          functions[index++]().then(() => {
            inProgress--;
            helper();
          });
        }
      }
      helper();
    });
  };
  
  /**
   * const sleep = (t) => new Promise(res => setTimeout(res, t));
   * promisePool([() => sleep(500), () => sleep(400)], 1)
   *   .then(console.log) // After 900ms
   */
