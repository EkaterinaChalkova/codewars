function stray(numbers) {
  let x1 = numbers[0];
  let x2 = numbers[1];
  let x3 = numbers[2];

  if (x1 == x2 && x2 != x3) {
    return x3;
  }
  if (x1 == x3 && x2 != x3) {
    return x2;
  }
  if (x2 == x3 && x1 != x3) {
    return x1;
  }

  for (let i = 1; i < numbers.length; i++) {
    if (x1 !== numbers[i]) {
      return numbers[i];
    }
  }
}

console.log(stray([17, 17, 17, 3, 17, 17, 17, 17]));
