const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let set = input[0].split(" ");
let numbers = input[1].split(" ");

let n = Number(set[0]);
let x = Number(set[1]);
let result = [];

for (let i = 0; i < n; i++) {
  if (Number(numbers[i]) < x) {
    result.push(numbers[i]);
  }
}

console.log(result.join(" "));
