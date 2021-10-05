// Recap
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split(" ");

let num = Number(input);

let cycle = 0;
let temp = num;
let step = 0;
let isSame = false;

while (!isSame) {
  cycle++;

  if (temp < 10) {
    step = temp % 10;
  } else {
    step = Math.floor(temp / 10) + (temp % 10); // 앞자리 + 뒷자리
  }

  temp = (temp % 10).toString() + (step % 10).toString(); // 원래 숫자 뒷자리 + 새 숫자 뒷자리
  temp = Number(temp);

  if (temp === num) {
    isSame = true;
  }
}

console.log(cycle);
