//Setup 
var processed = 0

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

///////////////////////////////////

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    arr.shift();
    return item;
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


  ////////////////////////////////////////

  function nextInLine(arr, item) {
    // Only change code below this line
    arr.push (item);
  var removedItem = arr.shift ();
  return removedItem;
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  ///////////////////////////////////////////////////

  function welcomeToBooleans() {

    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

  //////////////////////////////////////////////////////


  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue){
    return "Yes, that was true";
  }
    return "No, that was false";
  
    // Only change code above this line
  
  }
  
  trueOrFalse(true);
  trueOrFalse(false);
  
////////////////////////////////////////////////////

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(12);

  
  ////////////////////////////////////////////////

  // Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(7);

  ////////////////////////////////////////////////

  // Setup
function compareEquality(a, b) {
    if (10 === "10") { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");


  /////////////////////////////////////////////////

  // Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  /////////////////////////////////////////////////

  // Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  ///////////////////////////////////////////////////


  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(100);

  ////////////////////////////////////////////////////