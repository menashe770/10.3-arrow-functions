// Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

// Solution

const squareAndFindEvens = (numbers) => {
  let squares = numbers.map((num) => num ** 2);
  let evens = squares.filter((square) => square % 2 === 0);
  return evens;
};