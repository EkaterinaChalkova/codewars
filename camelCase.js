// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function CamelCase(str) {
  //your code here
  let arr = str.split(" ");
  //   Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
  return (
    arr
      .map(function (words) {
        //map применяет указанную функцию к каждому элементу массива и создаёт новый массив из полученных результатов от применения функции к каждому элементу массива
        return words.charAt(0).toUpperCase() + words.substring(1);
        //   Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
      })
      //  метод charAt() возвращает символ по заданному индексу внутри строки. Индекс первого символа равен нулю, а последнего рассчитывается как значение длины строки - 1 (length - 1
      .join("")
  );
  //     Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
};
// console.log(String.prototype.camelCase("JavaScript Exercises  hty SS gg"));
console.log("abc".camelCase("JavaScript Exercises  hty SS gg"));
