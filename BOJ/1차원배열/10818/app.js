const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let number = input[1].split(" ");
let max = number[0];
let min = number[0];

for (let i = 0; i < number.length; i++) {
  if (max < Number(number[i])) {
    max = number[i];
  }
  if (min > Number(number[i])) {
    min = number[i];
  }
}

console.log(min, max);
