"use strict";

var Fizzbuzz = (function() {
  
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
          output += 'Fizz'; 
        }
        if (i%5 === 0) {
          output += 'Buzz'; 
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
      var resultTitleContainer = document.createElement("p");
      var resultContainer = document.createElement("p");
      var text1 = document.createTextNode(fbOutputTitle);
      var text2 = document.createTextNode(fbOutputString);
      resultTitleContainer.appendChild(text1);
      resultContainer.appendChild(text2);
      destination.appendChild(resultTitleContainer);
      destination.appendChild(resultContainer);
    };

    //Set up clear function to be usable outside the main class, attached to its own event handler
    Fizzbuzz.prototype.emptyBox = _clear;
});

// create two Fizzbuzzes just for sport
var fbObject = new Fizzbuzz();
var fbObject2 = new Fizzbuzz();

// activate first FizzBuzz input area
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  fbObject.read(parseInt(document.getElementById('number-one').value),parseInt(document.getElementById('number-two').value));
  document.getElementById('number-one').value = "";
  document.getElementById('number-two').value = "";
  fbObject.write(document.getElementById("result-box"));
});

document.getElementById("clear").addEventListener("click", function(e) {
  e.preventDefault();
  fbObject.emptyBox(document.getElementById("result-box"));
});

// activate second FizzBuzz input area
document.getElementById("submitb").addEventListener("click", function(e) {
  e.preventDefault();
  fbObject2.read(parseInt(document.getElementById('number-oneb').value),parseInt(document.getElementById('number-twob').value));
  document.getElementById('number-oneb').value = "";
  document.getElementById('number-twob').value = "";
  fbObject2.write(document.getElementById("result-boxb"));
});

document.getElementById("clearb").addEventListener("click", function(e) {
  e.preventDefault();
  fbObject2.emptyBox(document.getElementById("result-boxb"));
});