let maxRange = 15;
let num = Math.floor(Math.random() * maxRange) + 1;
console.log(num);

// 3の倍数かつ5の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3の倍数かつ5の倍数です');
}

// 3の倍数の場合
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

// 5の倍数の場合
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

// それ以外の場合
else {
  console.log( num );
}