// This file does calculations on inputted arrays
// NOTE: This file returns [res], not arr like it should
// NOTE: So you have to use `return arr;` at the end of a case
// NOTE: Also, this file contains engnot(), so you NEED it
// NOTE: for subs/engineering.js (Must be in ../).

// If you are missing the subs folder, or any of the files in it you can
// disable it and use the basic commands by passing proc(arr, false)

// NOTE: The second param in "module.exports.proc" is for "subs/*"
// NOTE: Set it to true if you have the folder, and false if you don't
// If you can get the subs, you should set it to true as it is really
// useful to have them, especially the math one.

// To use this, just input an array exactly as you would expect.
// For example, calc.proc([5, 4, 3, "add"], true);
// It will return the sum of the three numbers. Please note that
// numbers in arrays that are returned are always formatted as strings.

// This is a good example on how to operate an array

// var calc = require("calc.js");
// var x = ['5', '4', '5', '5', "av"];
// console.log(calc.proc(x, false));

// If you have questions about anything, please email me
// Alexandersonone@gmail.com

/*jshint esversion: 6 */

// Get engineering notation of units
function engnot(x){
  // [value under/equal to x, value over x, name, multiplier]
  var units = [
    // Over (or equal to) 1
    [1e0 , 1e3 , "" , 1e0  ],
    [1e3 , 1e6 , "k", 1e-3 ],
    [1e6 , 1e9 , "M", 1e-6 ],
    [1e9 , 1e12, "G", 1e-9 ],
    [1e12, 1e15, "T", 1e-12],
    // Under 1
    [1e-3 , 1e0  , "m", 1e3 ],
    [1e-6 , 1e-3 , "u", 1e6 ],
    [1e-9 , 1e-6 , "n", 1e9 ],
    [1e-12, 1e-9 , "p", 1e12],
    [1e-15, 1e-12, "f", 1e15]
  ];
  for(var i = 0; i < units.length; i++){
    if(x >= units[i][0] && x < units[i][1]){
      return (x * units[i][3]) + units[i][2];
    }
  }
  // If no unit is found
  return String(x);
}

module.exports.engnot = engnot;

module.exports.proc = function(arr, bit){
  var lastIn = arr[arr.length - 1];

  // If last input was a number
  if(Number(lastIn) || Number(lastIn) === 0){
    if(lastIn === ''){
      arr.pop();
      console.log("Please enter a command or a number!");
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
        arr.sort(function(a,b){return Number(a)-Number(b);});
        return arr;
      case "HIGHTOLOW" :
      case "H"         :
      case "TROS"      :
      case "SORTH"     :
        arr.pop();
        arr.sort(function(a,b){return Number(b)-Number(a);});
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

      // Insert a random 1 or a 0
      case "RANDOM" :
      case "RAND"   :
        arr.pop();
        arr[arr.length] = Math.round(Math.random());
        return arr;

      // Moves newest element to oldest element
      case "NEWTOOLD" :
      case "NTO"      :
        arr.pop();
        var first = arr[arr.length - 1];
        arr.pop();
        arr = (first + ',' + arr).split(',');
        return arr;

      // Moves oldest to newest
      case "OLDTONEW" :
      case "OTN"      :
        arr.pop();
        var oldest = arr[0];
        arr.shift();
        arr = (arr + ',' + oldest).split(',');
        return arr;

      // Reverse the array
      case "REVERSE"   :
      case "REV"       :
      case "BACKWARDS" :
        arr.pop();
        arr.reverse();
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

      case "ENG"      :
      case "ENGINEER" :
      case "NOTATION" :
      case "UNITS"    :
      case "EN"       :
        arr.pop();
        var engnotarr = [];
        for(var i = 0; i < arr.length; i ++){
          engnotarr[i] = engnot(arr[i]);
        }
        console.log("Result: ", engnotarr);
        return arr;

      // Duplicate an array
      case "DUPLICATE"  :
      case "DUPE"       :
      case "COPY"       :
        arr.pop();
        var length = arr.length;
        for(var copy = 0; copy < length; copy++){
          arr[length + copy] = arr[copy];
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

        if(high !== undefined && low !== undefined) res = high - low;
        break;

      // Get the highest value in the set of numbers
      case "MAXIMUM" :
      case "MAX"     :
      case "HIGH"    :
      case "MOST"    :
        arr.pop();
        var max = Number(arr[0]);
        arr.shift();
        while(arr.length > 0){
          if(Number(arr[0]) > Number(max)){
            max = arr[0];
          }
          arr.shift();
        }

        if (max !== undefined) res = max;
        break;

      // Get the lowest value in the set of numbers
      case "MINIMUM" :
      case "MIN"     :
      case "LEAST"   :
      case "LOW"     :
      case "LOWEST"  :
        arr.pop();
        var min = Number(arr[0]);
        arr.shift();
        while(arr.length > 0){
          if(Number(arr[0]) < Number(min)){
            min = arr[0];
          }
          arr.shift();
        }

        if(min !== undefined) res = min;
        break;

      // Clear the array
      case "CLEAR":
      case "CL"   :
        return [];

      // Fix the array
      case "FIX" :
        arr.pop();
        var fixArr = [];
        for(var fixI = 0; fixI < arr.length; fixI++){
          if(!(arr[fixI] === undefined || arr[fixI] === null || isNaN(arr[fixI]) ||
            arr[fixI] === '')){
              fixArr[fixArr.length] = arr[fixI];
          }
        }
        return fixArr;

      // Delte the last member (if there is one)
      case "POP"   :
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
        if(lastIn[0] == "%" && bit){
          const engineering = require("./subs/engineering.js");
          return engineering.main(arr);
        }
        else if(lastIn[0] == "$" && bit){
          const programming = require("./subs/programming.js");
          return programming.main(arr);
        }
        else if(bit){
          const mathjs = require("./subs/math.js");
          return mathjs.main(arr);
        }
        else{
          console.log("Command not found");
          arr.pop();
          return arr;
        }
    }

      return [String(res)];
  }

};
