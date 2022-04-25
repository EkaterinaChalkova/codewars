// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

function filterLongWords(sentence, n) {
  //Solution here
  //разбить строку на массив по словам
  array = sentence.trim().split(" ");
  result = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].length > n) {
      result.push(array[i]);
      //   console.log(result);
    }
  }
  return result;
}

console.log(filterLongWords("HHJ bbb huiio", 2));

// function filterLongWords(sentence, n) {
//     return sentence.split(" ").filter(x => x.length > n)
//   }
