// A file for basic math and some more complex commands
// This file is the last step on the alternate commands
// Meaning all commands may not be math commands

module.exports.main = function(arr){
  switch (arr[arr.length - 1].toUpperCase()) {
    // Divide last to
    case "DIV"    :
    case "DIVIDE" :
    case "/"      :
      arr.pop();
      var den = arr[arr.length - 1];
      arr.pop();
      arr[arr.length - 1] /= den;
      break;
    default:
      console.log("Command: \'" + arr[arr.length - 1] + "\' not found.");
      arr.pop();
  }
  return arr;
};
