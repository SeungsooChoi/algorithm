const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

let a = input[0];
let b = input[1];
let v = input[2];
// 시간복잡도로 인해 반복문 쓰지말아보자.
console.log(Math.ceil((v - b) / (a - b)));
