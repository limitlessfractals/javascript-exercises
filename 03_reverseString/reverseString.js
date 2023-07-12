const reverseString = function(string) {
    let rev = "";
    let i = string.length;
    while (i > 0) {
      rev += string[i-1];
      i -= 1;
    }
    return rev;
  };
  
// Do not edit below this line
module.exports = reverseString;
