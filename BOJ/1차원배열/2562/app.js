const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let numbers = input.map((current) => Number(current));
let max = numbers[0];
let n = 0;

for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
    n = i;
  }
}

console.log(max);
console.log(n + 1);
