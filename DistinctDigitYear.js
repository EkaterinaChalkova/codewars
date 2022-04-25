// The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

// Input/Output
// [input] integer year
// 1000 ≤ year ≤ 9000

// [output] an integer
// the minimum year number that is strictly larger than the input number year and all its digits are distinct.

// function distinctDigitYear(year) {
//   //coding and coding..
//   for (1000 <= year; year <= 9000; year++) {
//     // console.log(year);
//     h = String(year);
//     array = h.split("");
//     // for (i = 0; i < arr.length; i++) {
//     //   for (j = i + 1; j < arr.length; j++) {
//     //     if (arr[i] != arr[j]) {
//     //       result.push(arr[i], arr[j]);
//     //     }
//     //   }

//     //   return +result.join("");

//     const length = array.length;
//     let result = [];
//     if (!length) return result;
//     for (let i = 0; i < length - 1; i++) {
//       for (let j = i + 1; j < length; j++)
//         if (array[i] === array[j]) {
//           //   if (!result.length) result.push(array[i]);
//           //   result.push(array[j]);
//           return +array.join("");
//         }
//       if (result.length) return result;
//     }
//     return +array.join("") + " All elements are different";
//   }
// }
// // 1000 ≤ год ≤ 9000
// console.log(distinctDigitYear(8977));

// function equalElementsInArray(array) {
//   const length = array.length;
//   let result = [];
//   if (!length) return result;
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++)
//       if (array[i] === array[j]) {
//         if (!result.length) result.push(array[i]);
//         result.push(array[j]);
//       }
//     if (result.length) return result;
//   }
//   return array + "All elements are different";
// }
// console.log(equalElementsInArray([2, 1, 5, 9, 4, 5, 6]));
// console.log(equalElementsInArray([2, 1, 5, 9, 6, 4, 1, 5, 6]));
// console.log(equalElementsInArray([1, 2, 3]));

// array = [4, 5, 7];
// const set = new Set(array);
// console.assert(set.size == array.length);

function distinctDigitYear(year) {
  for (i = year + 1; i <= 9000; i++) {
    h = String(i);
    array = h.split("");
    // const set = array.Set(3);
    set = new Set("" + array).size;
    // console.log(i);
    if (array.length < set) {
      return i;
    }
  }
}

console.log(distinctDigitYear(8765));
