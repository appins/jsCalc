// A useful file that contains many engineering commands

var calc = require("../calc.js");

module.exports.main = function(arr){
  switch (arr[arr.length - 1].toUpperCase()) {
    // Get engineering notaion
    case "%":
      arr.pop();
      var eng = [];
      for(var i = 0; i < arr.length; i ++){
        eng[i] = calc.engnot(arr[i]);
      }
      console.log("Result :", eng);
      break;

    // Series circut caluculations
    case "%SC"     :
    case "%SERIES" :
      arr.pop();
      var seriesarr = arr;
      console.log('\n', "Voltage total: ", calc.engnot(seriesarr[0]) + "V");
      var v = seriesarr[0];
      seriesarr.shift();
      var tr = 0;
      for(var series = 0; series < seriesarr.length; series++){
        tr += Number(seriesarr[series]);
      }
      console.log("Resistance total: ", calc.engnot(tr) + "Ω");
      console.log("Current total: ", calc.engnot(v / tr) + "A");
      for(var resist = 0; resist < seriesarr.length; resist++){
        console.log('\n', "Voltage drop " + (resist + 1) + ": ", calc.engnot(seriesarr[resist] * v / tr) + "V");
      }
      console.log('\n');

      arr = (v + ',' + arr).split(',');
      break;

    // Parallel circut
    case "%PL" :
    case "%PARALLEL":
      arr.pop();
      console.log('\n', "Voltage total: ", calc.engnot(arr[0]) + "V");
      var parres = 0;
      for(var parinc = 1; parinc < arr.length; parinc ++){
        parres += (1 / arr[parinc]);
      }

      parres = 1 / parres;
      console.log('\n', "Resistance total: ", calc.engnot(parres) + "Ω");

      console.log('\n', "Current total: ", calc.engnot(arr[0] / parres) + "A", '\n');

      for(var par = 1; par < arr.length; par ++){
        console.log("Current through resistor " + par + ": ", calc.engnot(arr[0] / arr[par]) + "Ω");
      }
      break;


    case "%COMP"  :
    case "%WEIGH" :
    case "%C"     :
      arr.pop();
      var max = arr[0];
      for(var frac = 1; frac < arr.length; frac++){
        if(arr[frac] > max){
          max = arr[frac];
        }
      }
      for(var tot = 0; tot < arr.length; tot++){
        arr[tot] /= max;
      }
    break;

    default:
      console.log("ENG command not found...");
      arr.pop();
      return arr;
  }

  return arr;
};
