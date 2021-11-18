const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split(" ").map(Number);
let a = input[0];
let b = input[1];
let c = input[2];

const answer = Math.floor(a / (c - b)) + 1;

if (b >= c) {
  //  인건비가 판매값보다 비쌈
  console.log(-1);
} else {
  console.log(answer);
}
