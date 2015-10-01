"use strict";

// create two Fizzbuzzes just for sport
var fbFizzBuzz = new Fizzbuzz();
var fbBleepBlorp = new Fizzbuzz('Bleep', 'Blorp');
console.log ("Outside of the routine", fbFizzBuzz, fbBleepBlorp);

// activate first FizzBuzz input area
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  fbFizzBuzz.read(parseInt(document.getElementById('number-one').value),parseInt(document.getElementById('number-two').value));
  document.getElementById('number-one').value = "";
  document.getElementById('number-two').value = "";
  fbFizzBuzz.write(document.getElementById("result-box"));
});

document.getElementById("clear").addEventListener("click", function(e) {
  e.preventDefault();
  fbFizzBuzz.emptyBox(document.getElementById("result-box"));
});

// activate second FizzBuzz input area
document.getElementById("submitb").addEventListener("click", function(e) {
  e.preventDefault();
  fbBleepBlorp.read(parseInt(document.getElementById('number-oneb').value), parseInt(document.getElementById('number-twob').value));
  document.getElementById('number-oneb').value = "";
  document.getElementById('number-twob').value = "";
  fbBleepBlorp.write(document.getElementById("result-boxb"));
});

document.getElementById("clearb").addEventListener("click", function(e) {
  e.preventDefault();
  fbBleepBlorp.emptyBox(document.getElementById("result-boxb"));
});
