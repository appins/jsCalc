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

    // Calculate the perecentage of the whole for each number
    case "OVERWHOLE"  :
    case "OW"         :
    case "DECIMAL"    :
      arr.pop();
      var total = 0;
      for(var ow = 0; ow < arr.length; ow++){
        total += Number(arr[ow]);
      }

      for(var ow1 = 0; ow1 < arr.length; ow1++){
        arr[ow1] /= total;
      }
      break;

    // Exponent
    case "EXPONENT" :
    case "^"        :
    case "EXP"      :
    case "**"       :
      arr.pop();
      var exp = arr[arr.length - 1];
      arr.pop();
      arr[arr.length - 1] = Math.pow(arr[arr.length - 1], exp);
      break;

    // Multiply each pair of numbers
    case "MULTI2"     :
    case "MULTIPAIRS" :
    case "MULTIPY"    :
    case "*P"         :
    case "*2"         :
      arr.pop();
      var multi2 = [];
      for(var multi2C = 0; multi2C < arr.length; multi2C += 2){
        multi2[multi2C / 2] = arr[multi2C] * arr[multi2C + 1];
        if(isNaN(multi2[multi2C / 2])){
          multi2[multi2C / 2] = arr[multi2C];
        }
      }
      return multi2;

    default:
      console.log("Command: \'" + arr[arr.length - 1] + "\' not found.");
      arr.pop();
  }
  return arr;
};
