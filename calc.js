// This file does calculations on inputted arrays

/*jshint esversion: 6 */

module.exports.proc = function(arr){
  var lastIn = arr[arr.length - 1];

  // If last input was a number
  if(Number(lastIn) || Number(lastIn) === 0){
    return arr;
  }
  else{
    var res = 0;

    switch (lastIn.toUpperCase()) {
      case "PLUS":
      case "ADD" :
      case "SUM" :
      case "+"   :
        for(var i = 0; i < arr.length - 1; i++){
          res += Number(arr[i]);
        }
        break;

      case "MULTIPLY":
      case "TIMES"   :
      case "PRODUCT" :
      case "*"       :
        res = 1;
        for(var j = 0; j < arr.length - 1; j++){
          res *= Number(arr[j]);
        }
        break;

      case "EXIT" :
      case "QUIT" :
      case "CLOSE":
        return "exit";

      default:
      res = 0;
      console.log("Incorrect input");
    }
    return [String(res)];
  }

};
