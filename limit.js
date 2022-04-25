function smallEnough(a, limit) {
  for (i = 0; i <= a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}

console.log(smallEnough([10, 220, 1000], 200));

function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
