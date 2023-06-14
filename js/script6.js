const applyCallbackToEachElement = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];

const squareCallback = function (a) {
  return a * a;
}

const result = applyCallbackToEachElement(arr, squareCallback);

console.log(result); // [1, 4, 9, 16, 25]
