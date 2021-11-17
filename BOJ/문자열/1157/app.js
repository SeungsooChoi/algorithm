const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
let str = input[0];
let obj = {};

for (let i = 0; i < str.length; i++) {
  // 현재 알파벳
  let nowAlphabet = str[i].toUpperCase();
  if (obj[nowAlphabet]) {
    obj[nowAlphabet]++;
  } else {
    obj[nowAlphabet] = 1;
  }
}

let maxValue = -1;
let maxChar = "";
let isDuplicated = false;
for (const key in obj) {
  if (obj[key] > maxValue) {
    maxValue = obj[key];
    maxChar = key;
    isDuplicated = false;
  } else if (obj[key] === maxValue) {
    isDuplicated = true;
  }
}
if (isDuplicated) {
  console.log("?");
} else {
  console.log(maxChar);
}
