"use strict";

// create two Fizzbuzzes just for sport
var fbObject = new Fizzbuzz();
var fbObject2 = new Fizzbuzz('Bleep', 'Blorp');

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
  fbObject2.read(parseInt(document.getElementById('number-oneb').value), parseInt(document.getElementById('number-twob').value));
  document.getElementById('number-oneb').value = "";
  document.getElementById('number-twob').value = "";
  fbObject2.write(document.getElementById("result-boxb"));
});

document.getElementById("clearb").addEventListener("click", function(e) {
  e.preventDefault();
  fbObject2.emptyBox(document.getElementById("result-boxb"));
});
