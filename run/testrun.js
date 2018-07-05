var testArray = [];
//libraries
var colors = require("colors");
// test files
var wiki = require("../tests/Wiki.js");
var messiah = require("../tests/MessiahSearch.js");

//include test files
testArray.push(wiki);
testArray.push(messiah);
console.log("begin testing");
console.log("-------------------------------");

var check = async function() {
  for (var i = 0; i < testArray.length; i++) {
    for (var b = 0; b < testArray[i].length; b++) {
      console.log("before object init");
      var testObject = testArray[i][b];

      await testObject.get();
      console.log("after object init");

      if (testObject.success == true) {
        console.log(testObject.name + " :successful".bgGreen);
      } else {
        console.log(testObject.name + " :failed".bgRed);
      }
      console.log("------------------------------");
    }
  }
};
check(testArray);
