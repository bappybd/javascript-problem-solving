/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let groupByList = {};

    for(let i = 0; i < this.length; i++){
        let key = fn(this[i]);
        if (!groupByList[key]) groupByList[key] = [];
        groupByList[key].push(this[i]);
    }

    return groupByList;
};

const arr = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ], 
  fn = function (item) { 
    return item.id; 
  }

console.log(arr.groupBy(fn))