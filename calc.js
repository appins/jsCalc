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
      // Add all numbers together
      case "PLUS":
      case "ADD" :
      case "SUM" :
      case "+"   :
      case "+ALL":
        for(var addunit = 0; addunit < arr.length - 1; addunit++){
          res += Number(arr[addunit]);
        }
        break;

      // Multiply all numbers together
      case "MULTIPLY":
      case "TIMES"   :
      case "PRODUCT" :
      case "*"       :
        res = 1;
        for(var timeunit = 0; timeunit < arr.length - 1; timeunit++){
          res *= Number(arr[timeunit]);
        }
        break;

      // Add only the last two
      case "ADDLAST" :
      case "ADD2"    :
      case "ADD 2"   :
      case "SUMLAST" :
      case "+LAST"   :
      case "+L"      :
        var temparr = [];
        for(var addlast = 0; addlast < arr.length - 3; addlast++){
          temparr[addlast] = arr[addlast];
        }
        temparr[temparr.length] = String(Number(arr[arr.length - 3]) + Number(arr[arr.length - 2]));
        return temparr;

      // Average
      case "AVERAGE" :
      case "AV"      :
      case "MEAN"    :
        for(var avunit = 0; avunit < arr.length - 1; avunit++){
          res += Number(arr[avunit]);
        }
        res /= arr.length - 1;
        break;

      // Sort
      case "LOWTOHIGH" :
      case "SORTL"     :
      case "L"         :
        arr.pop();
        arr.sort(function(a,b){return a-b;});
        return arr;

      // Clear the array
      case "CLEAR":
        return [];

      // Delte the last member (if there is one)
      case "DEL"   :
      case "DELTE" :
        arr.pop();
        arr.pop();
        return arr;

      // Exit the program
      case "EXIT" :
      case "QUIT" :
      case "CLOSE":
      case "E"    :
        return "exit";

      default:
      res = 0;
      console.log("Incorrect input");
    }
    return [String(res)];
  }

};
