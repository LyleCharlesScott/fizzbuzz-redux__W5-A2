"use strict";

var Fizzbuzz = (function() {
  
  //internal clear function to erase dom elements from screen
    var _clear = function(destination) {
      if (destination.hasChildNodes()) {
      destination.removeChild(destination.childNodes[0]);
      _clear(destination);
    }};

  //calculate fizzbuzz using variable passed in by the read method, output array of results.
    var _calculate = function(na, nb) {
      var fbOutputArray = [];
      console.log("start of constructor na: " + na + " nb: " + nb);
      if (na > nb) {
        console.log("na: " + na + " nb: " + nb);
        na = na + nb;
        console.log("na: " + na + " nb: " + nb);
        nb = na - nb;
        console.log("na: " + na + " nb: " + nb);
        na = na - nb;
      }
      console.log("na: " + na + " nb: " + nb);
      for (var i = na; i <= nb; i++) { 
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
    Fizzbuzz.prototype.read = function(na, nb) {
      if (!na) {
        na = 0;
      };
      if (!nb) {
        nb = 0;
      };
      this.na = na;
      this.nb = nb;
      this.fbOutputArray = _calculate(na, nb);
    };

  //write markup with results of fizzbuzz calculation. Uses destination as argument so function can be used generically with any location in the DOM.
    Fizzbuzz.prototype.write = function(destination) {
      var fbOutputTitle = "First input: " + this.na + " Second input: " + this.nb;
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

var fbObject = new Fizzbuzz();

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

