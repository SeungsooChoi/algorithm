const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString();
let wordArr = input.trim().split(" ");
let count = 0;

// 공백만 나올 경우를 대비하여
for (let i = 0; i < wordArr.length; i++) {
  if (wordArr[i] !== "") {
    count++;
  }
}

console.log(count);
