// This file does calculations on inputted arrays

/*jshint esversion: 6 */

module.exports.proc = function(arr){
  var lastIn = arr[arr.length - 1];

  // If last input was a number
  if(Number(lastIn) || Number(lastIn) === 0){
    if(lastIn === ''){
      arr.pop();
    }
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

      // Multiply last 2 numbers together
      case "TIMESLAST"  :
      case "*L"         :
      case "MULTIPLY 2" :
      case "TIMES 2"    :
        arr.pop();
        arr[arr.length - 2] = String(Number(arr[arr.length - 1]) * Number(arr[arr.length - 2]));
        arr.pop();
        return arr;

      // Average
      case "AVERAGE" :
      case "AV"      :
      case "MEAN"    :
        for(var avunit = 0; avunit < arr.length - 1; avunit++){
          res += Number(arr[avunit]);
        }
        res /= arr.length - 1;
        break;

      // Sort low to high (Most common)
      case "SORT"      :
      case "LOWTOHIGH" :
      case "SORTL"     :
      case "L"         :
        arr.pop();
        arr.sort(function(a,b){return a-b;});
        return arr;

      // Square root only the last number
      case "SQUARER"     :
      case "SQRT"        :
      case "SQUAREROOT"  :
      case "SQUARE ROOT" :
      case "SR"          :
        arr.pop();
        arr[arr.length - 1] = String(Math.sqrt(arr[arr.length - 1]));
        return arr;

      // Increament last number
      case "INCREMENT" :
      case "INC"       :
      case "++"        :
        arr.pop();
        if(arr.length >= 1){
          arr[arr.length - 1]++;
        }
        return arr;

      // Intrement all numbers in array
      case "INCALL"       :
      case "INCREMENTALL" :
      case "++A":
        arr.pop();
        for(var intunit = 0; intunit < arr.length; intunit++){
          arr[intunit]++;
        }
        return arr;

      // Multiply all numbers by the last one in the array
      case "MULTIBY"    :
      case "MULTIPLYBY" :
      case "MB"         :
        arr.pop();
        var factor = arr[arr.length - 1];
        arr.pop();
        for(var mbunit = 0; mbunit < arr.length; mbunit++){
          arr[mbunit] *= factor;
        }
        return arr;

      // Moves newest element to oldest element
      case "NEWTOOLD" :
      case "NTO"      :
        arr.pop();
        var first = arr[arr.length - 1];
        arr.pop();
        arr = (first + ',' + arr).split(',');
        return arr;

      // Add all numbers by the last one in the array
      case "ADDBY" :
      case "SUMBY" :
      case "AB"    :
      case "+B"    :
        arr.pop();
        var diff = arr[arr.length - 1];
        arr.pop();
        for(var abunit = 0; abunit < arr.length; abunit++){
          arr[abunit] = String(Number(arr[abunit]) + Number(diff));
        }
        return arr;

      // Find the medaian of the set of numbers
      case "MEDIAN" :
      case "MED"    :
        arr.pop();
        arr.sort(function(x, y){return x-y;});
        while(arr.length > 2){
          arr.pop();
          arr.shift();
        }

        if(arr.length == 1){
          res = arr[0];
        }
        else if(arr.length == 2){
          res = String((Number(arr[0]) + Number(arr[1])) / 2);
        }

        break;

      // Mode
      case "MODE"   :
      case "COMMON" :
      case "MO"     :
        arr.pop();
        var modeob = {};

        // The value that occurst the most times, in the format of
        // [How many times, number, and if it is an error]
        var currhigh = [0, undefined, true];

        // Make an object of all the values
        var modearr = arr;
        while(modearr.length > 0){
          if(modeob[modearr[0]] === undefined){
            modeob[modearr[0]] = 1;
          }
          else{
            modeob[modearr[0]]++;
          }

          if(currhigh[0] < modeob[modearr[0]]){
            currhigh[1] = modearr[0];
            currhigh[0] = modeob[modearr[0]];
            currhigh[2] = false;
          }
          else if(currhigh[0] == modeob[modearr[0]]){
            currhigh[2] = true;
          }
          modearr.shift();
        }

        if(currhigh[2]){
          res = '-1';
        }
        else{
          res = currhigh[1];
        }

        break;

      // Find the difference between the maximum and minimum values
      case "RANGE" :
      case "RA"    :
        arr.pop();
        var high = arr[0];
        var low = arr[0];
        arr.shift();

        while(arr.length > 0){
          if(arr[0] > high){
            high = arr[0];
          }
          if(arr[0] < low){
            low = arr[0];
          }
          arr.shift();
        }

        res = high - low;
        break;

      // Get the highest value in the set of numbers
      case "MAXIMUM" :
      case "MAX"     :
      case "HIGH"    :
      case "MOST"    :
        arr.pop();
        var max = arr[0];
        arr.shift();
        while(arr.length > 0){
          if(arr[0] > max){
            max = arr[0];
          }
          arr.shift();
        }
        res = max;
        break;

      // Get the lowest value in the set of numbers
      case "MINIMUM" :
      case "MIN"     :
      case "LEAST"   :
      case "LOW"     :
      case "LOWEST"  :
        arr.pop();
        var min = arr[0];
        arr.shift();
        while(arr.length > 0){
          if(arr[0] < min){
            min = arr[0];
          }
          arr.shift();
        }

        res = min;
        break;

      // Clear the array
      case "CLEAR":
      case "CL"   :
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
        arr.pop();
        console.log("Incorrect input: " + lastIn);
        return arr;
    }

      return [String(res)];
  }

};
