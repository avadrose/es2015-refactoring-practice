var PI = 3.14;
var nums = [1, 2, 3];

function double(arr) {
  return arr.map(function(num) {
    return num * 2;
  });
}

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
