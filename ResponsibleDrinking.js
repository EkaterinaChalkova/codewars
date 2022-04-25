// Welcome to the Codewars Bar!
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

const { count } = require("console");

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

function hydrate(s) {
  let count = 0;
  news = s.replace(/[^0-9]/g, "");
  h = String(news);
  array = h.split("");
  num = array.map((i) => Number(i));
  for (i = 0; i < num.length; i++) {
    count += num[i];
    // console.log(count);
  }
  if (count == 1) {
    return count + " glass of water";
  } else {
    return count + " glasses of water";
  }
}

console.log(hydrate("hhh 3 hhh jjj"));

// function hydrate(s) {
//     let answer = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (parseInt(s[i]) > 0) {
//         answer += +s[i];
//       }
//     }
//     return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
//   }
