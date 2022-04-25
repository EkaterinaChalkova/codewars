function SeriesSum(n) {
  // Happy Coding ^_^
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let x = 1 / (1 + i * 3);
    sum += x;
  }
  return sum.toFixed(2);
}

console.log(SeriesSum());