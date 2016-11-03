// A useful file for processing programming type commands
// NOTE: Some commads are formatted in "$x:" form, they will be seperated by the ':'

module.exports.main = main;

function main(arr){
  switch (arr[arr.length - 1].split(":")[0].toUpperCase()) {
    // Insert a string of char codes at the end of the array
    case "$STRING":
    case "$S"     :
      var string = arr[arr.length - 1].split(":")[1];
      arr.pop();
      for(var stringI = 0; stringI < string.length; stringI++){
        arr[arr.length] = string.charCodeAt(stringI);
      }
      break;
    case "$BINARY" :
    case "$BIN"    :
      var bin = arr[arr.length - 1].split(":")[1];
      var binInt = String(parseInt(bin, 2));
      arr.pop();
      arr[arr.length] = binInt;
      break;
    default:
    arr.pop();
    console.log("Command or pattern not found...");
  }
  return arr;
}
