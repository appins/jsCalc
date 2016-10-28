// A file for basic math and some more complex commands
// This file is the last step on the alternate commands
// Meaning all commands may not be math commands

module.exports.main = function(arr){
  switch (arr[arr.length - 1].toUpperCase()) {
    // Divide last two
    case "DIV"    :
    case "DIVIDE" :
    case "/"      :
      arr.pop();
      var den = arr[arr.length - 1];
      arr.pop();
      arr[arr.length - 1] /= den;
      break;

    // Subtract the last two
    case "SUBTRACT" :
    case "MINUS"    :
    case "-"        :
      arr.pop();
      var sub = arr[arr.length - 1];
      arr.pop();
      arr[arr.length - 1] -= sub;
      break;

    // Switch newest 2 variables
    case "SWITCH" :
    case "SHUF"   :
    case "S"      :
      arr.pop();
      if(arr.length === 0){
        return arr;
      }
      var newest = arr[arr.length - 1];
      arr[arr.length - 1] = arr[arr.length - 2];
      arr[arr.length - 2] = newest;
      break;

    // Transforms numbers into perecentages, trivial
    case "." :
      arr.pop();
      arr[arr.length - 1] /= 100;
      break;

    default:
      console.log("Command: \'" + arr[arr.length - 1] + "\' not found.");
      arr.pop();
  }
  return arr;
};
