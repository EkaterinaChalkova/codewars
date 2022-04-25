// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.
// function noOdds(values) {
//   // Return all non-odd values
//   for (i = 0; i < values.length; i++) {
//     if (values[i] % 2 == 0) {
//       console.log(values[i]);
//     } else {
//       return [];
//     }
//   }
// }

function noOdds(values) {
  let result = values.filter(function (elem) {
    if (elem % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });

  return result;
}

a = noOdds([138, 34, -141, 95, -84]);
console.log(a);

// let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// let result = numbers.filter(function (elem) {
//   if (elem >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(result.sort());
