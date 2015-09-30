"use strict";

var fbOutputArray = [];
var fbOutputTitle = "";
var fbOutputString = "";
var resultBox = "";
var resultTitleContainer = "";
var resultContainer = "";
var text1 = "";
var text2 = "";
var na = 0;
var nb = 0;


class Fizzbuzz {
  constructor(na, nb) {
  console.log("na: " + na + " nb: " + nb);
    fbOutputArray = [];
    if (na > nb) {
      na = na + nb;
      nb = na - nb;
      na = na - nb;
    }
    console.log(na + " " + nb);
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
    fbOutputTitle = "Start: " + na + " Finish: " + nb; 
    for (var j=0; j < (fbOutputArray.length-1); j++) {
      fbOutputString += (fbOutputArray[j] + " ");
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
  }
};

document.getElementById("submit").addEventListener("click", function(e) {
  //run fizzbuzz using the input from the input fields
  new Fizzbuzz(document.getElementById('number-one').value,document.getElementById('number-two').value);
  document.getElementById('number-one').value = "";
  document.getElementById('number-two').value = "";
});

document.getElementById("clear").addEventListener("click", function(e) {
  var EmptyBox = function() {if (resultBox.hasChildNodes()) {
    resultBox.removeChild(resultBox.childNodes[0]);
    EmptyBox();
  }};
  EmptyBox();
});
