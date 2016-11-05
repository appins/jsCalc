// This file reads information from the console and outputs the result
// It also handles exit requests
/* jshint esversion: 6 */

console.log("[ OLDEST --> NEWEST ]");

const calc = require("./calc.js");
const readline = require("readline");

var nums = [];

function getAns(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(":", function(data){
    if(data.split(" ").length == 1){
      nums[nums.length] = data;
    }
    else{
      var part = data.split(" ");
      while(part.length > 0){
        nums = calc.proc((nums + ',' + part[0]).split(","));
        part.shift();
      }
    }

    nums = calc.proc(nums, true);
    setTimeout(function(){
      console.log(nums);
      if(nums !== "exit")
        getAns();
    }, 0);
    rl.close();
  });
}

getAns();
