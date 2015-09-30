"use strict";

var Fizzbuzz = (function() {
  //list of variables
    var fbOutputArray = [];
    var fbOutputTitle = "";
    var fbOutputString = "";
    var resultBox = "";
    var resultTitleContainer = "";
    var resultContainer = "";
    var text1 = "";
    var text2 = "";
  
  //clear results from screen when second button is pushed
    var clear = function() {
      if (resultBox.hasChildNodes()) {
      resultBox.removeChild(resultBox.childNodes[0]);
      clear();
    }};
    
  //calculate fizzbuzz results, output array of results
    var calculate = function(na, nb) {
      console.log("start of constructor na: " + na + " nb: " + nb);
      fbOutputArray = [];
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

  //read input fields and clear fields, return variables with contents
    Fizzbuzz.prototype.read = function(na, nb) {
      this.na = na;
      this.nb = nb;
      this.fbOutputArray = calculate(na, nb);
    };

  //write markup with results of fizzbuzz calculation
    Fizzbuzz.prototype.write = function() {
      fbOutputTitle = "Start: " + this.na + " Finish: " + this.nb;
      fbOutputString = ""; 
      for (var j=0; j < (this.fbOutputArray.length); j++) {
        fbOutputString += (this.fbOutputArray[j] + " ");
      };
      resultBox = document.getElementById("result-box");
      resultTitleContainer = document.createElement("p");
      resultContainer = document.createElement("p");
      text1 = document.createTextNode(fbOutputTitle);
      text2 = document.createTextNode(fbOutputString);
      resultTitleContainer.appendChild(text1);
      resultContainer.appendChild(text2);
      resultBox.appendChild(resultTitleContainer);
      resultBox.appendChild(resultContainer);
    };

    Fizzbuzz.prototype.emptyBox = clear;
});

var fbObject = new Fizzbuzz();

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  fbObject.read(parseInt(document.getElementById('number-one').value),parseInt(document.getElementById('number-two').value));
  document.getElementById('number-one').value = "";
  document.getElementById('number-two').value = "";
  fbObject.write();
});

document.getElementById("clear").addEventListener("click", function(e) {
  e.preventDefault();
  fbObject.emptyBox();
});

