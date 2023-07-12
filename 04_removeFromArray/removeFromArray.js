const removeFromArray = function(arr, ...elements) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (elements.includes(arr[i])) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };
  

// Do not edit below this line
module.exports = removeFromArray;
