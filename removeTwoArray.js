// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6 ,7 ,8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

Array.prototype.remove_ = function (integer_list, values_list) {
  //your code here
  result = [];
  for (i = 0; i < integer_list.length; i++) {
    type = integer_list[i];
    y = values_list.includes(type);
    if (y === false) {
      result.push(type);
    }
  }

  return result;
};
l = new Array();

console.log(l.remove_([8, 7, 5, 9], [3, 43, 7, 9]));
