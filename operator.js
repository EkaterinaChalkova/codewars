function arithmetic(a, b, operator) {
  //your code here!
  add = "add";
  subtract = "subtract";
  multiply = "multiply";
  divide = "divide";
  if (operator == add) {
    return a + b;
  } else if (operator == subtract) {
    return a - b;
  } else if (operator == multiply) {
    return a * b;
  } else {
    return a / b;
  }
}

console.log(arithmetic(2, 8, "divide"));

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}
