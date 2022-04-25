// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// let numbers = null;
// if (numbers === null || numbers.length == 0) {
//     return [];
// } else {
//   numbers.sort(function (a, b) {
//     return a - b;
//   });
// }
// console.log(numbers); // [1, 2, 3, 4, 5]

function solution(nums) {
  if (nums === null || nums.length == 0) {
    return [];
  } else {
    return nums.sort(function (a, b) {
      return a - b;
    });
  }
}
console.log(solution([1, 2, 3, 5, 10]));

function solution(nums) {
  return (nums || []).sort(function (a, b) {
    return a - b;
  });
}
