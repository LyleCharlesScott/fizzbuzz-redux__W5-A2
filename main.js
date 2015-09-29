var fbOutput = []
  


var Fizzbuzz = function(n1, n2) {
  fbOutput = [];
  if (n1 > n2) {
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;
  }
  for (i=n1; i<n2+1; i++) {  // start a loop that iterates from 1 to 100
    var output = ''; // declare an empty string as a variable for the output
    if (i%3 === 0) { // see if the count is divisible by 3
      output += 'Fizz'; // append fizz to the output if the count is divisible by 3
    }
    if (i%5 === 0) { // see if the count is divisible by 5
      output += 'Buzz'; // append buzz to the output if the count is divisible by 5
    }
    // the output variable will be empty, "Fizz", "Buzz" or "FizzBuzz" at this point. 
    if (output === "") { // if output is empty, it wasn't a Fizz or a Buzz
      output = i; // if it's not a Fizz or a Buzz, assign it the count number
    }
    console.log(output); // log the output before restarting the routine
    fbOutput.push(output);
  }
  return fbOutput;
};


Fizzbuzz (5, 30);
console.log(fbOutput);
