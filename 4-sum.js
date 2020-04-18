/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/

var sumTotal = 0;

function sum(numBegin, numEnd) {
  for (var i = numBegin + 1; i < numEnd; i++) {
    if (i % 2 === 0) {
      sumTotal = i + sumTotal;
    }
  }
  console.log(sumTotal);
}

console.log(sum(12, 19));

//starts from numBegin + 1 because we dont want to include numBegin if it is an even number
