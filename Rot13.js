// function rot13(str) {
//   // LBH QVQ VG!
//   var re = new RegExp("[a-z]", "i");
//   var min = "a".charCodeAt(0);
//   var max = "z".charCodeAt(0);
//   var factor = 13;
//   var result = "";
//   //   str = str.toUpperCase();

//   for (var i = 0; i < str.length; i++) {
//     result += re.test(str[i])
//       ? // Метод test() выполняет поиск сопоставления регулярного выражения указанной строке. Возвращает true или false
//         String.fromCharCode(
//           ((str.charCodeAt(i) - min + factor) % (max - min + 1)) + min
//         )
//       : str[i];
//   }

//   return result;
// }

// console.log(rot13("hjhuhjhkhb"));

function rot13(message) {
  let alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  result = "";
  for (let i = 0; i < message.length; i++) {
    if (alphabet.indexOf(message[i]) != -1) {
      result += alphabet[alphabet.indexOf(message[i]) + 13];
    } else {
      result += message[i];
    }
  }
  return result;
}

// console.log(rot13("jjfjdd"));

function rot13_2(message) {
  var abc =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => abc[abc.indexOf(c) + 13]);
}

console.log(rot13_2("jjfjddGGhh"));
