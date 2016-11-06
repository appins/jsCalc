// NOTE: This test all commands. This file functions as a way to test new
// NOTE: commands. Please test all commands BEFORE creating a pull request.

// NOTE: Make sure ../calc.js and ../subs/{engineering, math, programming}.js
// NOTE: exist

// Pass the command and then the result. It will check if they match
// TODO: Add multiple possible answers

var calc = require("../calc.js");

console.log((function(comm, result){
  var testarr = [5, 4, 6, 3, 7, 2, 8, 1, 9, 0, 10, comm];
  if(calc.proc(testarr) == result){
    return "It worked! Your command matched the test value";
  }
  else{
    return "Something went wrong! Returned " + calc.proc(testarr);
  }
})("add", 55));
