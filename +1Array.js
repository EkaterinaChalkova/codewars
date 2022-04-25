// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// function upArray(arr) {
//   i = arr.length - 1;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || arr[i] > 9) {
//       return null;
//     } else if (arr[i] == 9) {
//       arr[i] = 0;
//       i = i - 1;
//       arr[i] = arr[i] + 1;
//       return arr;
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     i = arr.length - 1;
//     if (arr[i] > 0 && arr[i] < 9) {
//       //   i = i - 1;
//       arr[i] = arr[i] + 1;

//       return arr;
//     }
//   }
//   return arr;
// }

// function upArray(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || arr[i] > 9) {
//       return null;
//     }
//   }
//   let result = arr.join("");
//   let Result = [];
//   let num = Number(result);
//   +1;
//   let number = num + 1;
//   let array = Object.assign([], "" + number);
//   //   [...number.toString()].map(Number);
//   return array.map(Number);
// }

// console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]));

// function upArray(arr) {
//   last_i = arr.length - 1;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || arr[i] > 9) {
//       return null;
//     } else if (last_i == 9) {
//       arr[i] = 0;
//       i = i - 1;
//       arr[i] = arr[i] + 1;
//       return arr;
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     i = arr.length - 1;
//     if (arr[i] > 0 && arr[i] < 9) {
//       //   i = i - 1;
//       arr[i] = arr[i] + 1;

//       return arr;
//     }
//   }
//   return arr;
// }
// console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 9, 8]));

// function upArray(arr) {
//   i = arr.length - 1;
//   if (arr[i] < 0) {
//     return null;
//   } else if (arr[i] == 9) {
//     arr[i] = 0;
//     return arr.join("");
//   } else {
//     arr[i]++;
//     return arr.join("");
//   }
// }

// function upArray(arr) {
//   //   i = arr.length - 1;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       console.log("if" + i);
//       return null;
//     }
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] == 9) {
//         arr[i] = 0;
//         i = i - 1;

//         arr[i] = arr[i] + 1;

//         return arr.join("");
//       }
//     }
//   }
//   return arr.join("");
// }

// function upArray(arr) {
//   //   i = arr.length - 1;
//   for (i = 0; i < arr.length; i++) {

//     if (arr[i] < 0) {

//       return null;
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 9) {
//       arr[i] = 0;
//       i = i - 1;

//       arr[i] = arr[i] + 1;

//       return arr.join("");
//     }
//   }

//   return arr.join("");
// }

// function upArray(arr) {
//   console.log(arr);
//   last_i = arr.length - 1;
//   if (last_i == -1) {
//     return null;
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || arr[i] > 9) {
//       return null;
//     }
//   }
//   let result = arr.join("");
//   console.log(result);
//   let num = BigInt(result);
//   console.log(num);
//   let number = num + 1;
//   let array = [...number.toString()].map(Number);
//   return array;
// }

// function upArray(arr) {
//   last_i = arr.length - 1;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || arr[i] > 9) {
//       return null;
//     } else if (last_i == 9) {
//       arr[i] = 0;
//       i = i - 1;
//       arr[i] = arr[i] + 1;
//       return arr;
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     i = arr.length - 1;
//     if (arr[i] > 0 && arr[i] < 9) {
//       //   i = i - 1;
//       arr[i] = arr[i] + 1;

//       return arr;
//     }
//   }
//   return arr;
// }

// var myArray = [999 + 1];
// // myArray.reverse();

// console.log(myArray); // ['три', 'два', 'один']

// function upArray(arr) {
//   arrob = arr.reverse();
//   console.log(arrob);
//   last_i = arrob.length - 1;
//   arrob[0] = arrob[0] + 1;
//   for (i = 0; i < arrob.length - 1; i++) {
//     console.log("i: ", i);
//     if (arrob[i] < 0 || arrob[i] > 10) {
//       console.log("inside if:", arrob);
//       return null;
//     } else {

//       if (arrob[i] == 10) {
//         console.log("inside up start: ", arrob);
//         arrob[i] = 0;
//         arrob[i + 1] = arrob[i + 1] + 1;
//         console.log("inside up end: ", arrob);
//       }

//     }
//   }
//   console.log(arrob);
//   if (arrob[last_i] == 10) {
//     arrob[last_i] = 0;
//     arrob.push(1);
//   }

//   return arrob.reverse();
// }

function upArray(arr) {
  console.log("start: ", arr);

  if (arr.length == 0) {
    return null;
  }

  for (i = arr.length - 1; i >= 0; i--) {
    // console.log("i: ", i);
    if (arr[i] < 0 || arr[i] > 9) {
      console.log("inside null: ", arr);
      return null;
    }
  }

  arr[arr.length - 1] = arr[arr.length - 1] + 1;
  // console.log("add 1: ", arr);
  for (i = arr.length - 1; i > 0; i--) {
    // console.log("i: ", i);

    if (arr[i] == 10) {
      // console.log("inside add: ", arr);
      arr[i] = 0;
      arr[i - 1] = arr[i - 1] + 1;
    }
    // console.log("end of iteration: ", arr);
  }
  if (arr[0] == 10) {
    arr[0] = 0;
    arr.unshift(1);
  }
  return arr;
}

console.log(upArray([]));
