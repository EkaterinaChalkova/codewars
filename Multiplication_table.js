multiplicationTable = function (size) {
  // insert code here

  result = [];

  for (i = 0; i < size; i++) {
    let arr = [];
    for (j = 0; j < size; j++) {
      arr.push((i + 1) * (j + 1));
    }
    result.push(arr);
  }

  return result;
};
console.log(multiplicationTable(7));
