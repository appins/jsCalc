/* jshint esversion: 6 */

const calc = require("./calc.js");

const readline = require("readline");

var exit = false;

var nums = [];

function getAns(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(":", function(data){
    nums[nums.length] = data;
    nums = calc.proc(nums);
    setTimeout(function(){
      console.log(nums);
      if(nums !== "exit")
        getAns();
    }, 0);
    rl.close();
  });
}

getAns();
