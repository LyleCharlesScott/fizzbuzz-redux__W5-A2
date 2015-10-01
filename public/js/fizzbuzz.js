"use strict";

var Fizzbuzz = (function() {

  var _firstFizz;
  var _secondBuzz;
  var Fizzbuzz = function(Fizz, Buzz) {
  _firstFizz = Fizz || 'Fizz';
  _secondBuzz = Buzz || 'Buzz';
  };

//interal clear function to erase dom elements from screen
  var _clear = function(destination) {
    if (destination.hasChildNodes()) {
    destination.removeChild(destination.childNodes[0]);
    _clear(destination);
  }};

//calculate fizzbuzz using variable passed in by the read method, output array of results.
  var _calculate = function(firstNumber, secondNumber) {
    var fbOutputArray = [];
    console.log("firstNumber: " + firstNumber + " secondNumber: " + secondNumber);
    for (var i = firstNumber; i <= secondNumber; i++) { 
      var output = ''; 
      if (i%3 === 0) { 
        output += _firstFizz; 
      }
      if (i%5 === 0) {
        output += _secondBuzz; 
      }
      if (output === "") { 
        output = i; 
      }
      fbOutputArray.push(output);
    }
    return fbOutputArray;
  };

//read input fields and clear fields, return variables with contents. Pass in external values so the function is compartmentalized.
  Fizzbuzz.prototype.read = function(firstNumber, secondNumber) {
    //error correction
    if (!firstNumber) {
      firstNumber = 0;
    };
    if (!secondNumber) {
      secondNumber = 0;
    };
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber + secondNumber;
      secondNumber = firstNumber - secondNumber;
      firstNumber = firstNumber - secondNumber;
    };
    //assign values to properties of main game object
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.fbOutputArray = _calculate(firstNumber, secondNumber);
  };

//write markup with results of fizzbuzz calculation. Uses destination as argument so function can be used generically with any location in the DOM.
  Fizzbuzz.prototype.write = function(destination) {
    var fbOutputTitle = "Low number: " + this.firstNumber + " High number: " + this.secondNumber;
    var fbOutputString = ""; 
    for (var j=0; j < (this.fbOutputArray.length); j++) {
      fbOutputString += (this.fbOutputArray[j] + " ");
    };
    var resultSectionOuterBox = document.createElement("div");
    resultSectionOuterBox.className = "output l-output";
    var resultTitleContainer = document.createElement("p");
    var resultContainer = document.createElement("p");
    var text1 = document.createTextNode(fbOutputTitle);
    var text2 = document.createTextNode(fbOutputString);
    resultTitleContainer.appendChild(text1);
    resultContainer.appendChild(text2);
    resultSectionOuterBox.appendChild(resultTitleContainer);
    resultSectionOuterBox.appendChild(resultContainer);
    destination.appendChild(resultSectionOuterBox);
  };

  //Set up clear function to be usable outside the main class, attached to its own event handler
  Fizzbuzz.prototype.emptyBox = _clear;

  return Fizzbuzz;
})();