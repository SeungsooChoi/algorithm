const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Number(input[i]));
}

let restNum = numbers.map(function (num) {
  return num % 42;
});

let diffNum = [];
restNum.forEach(function (num) {
  if (diffNum.indexOf(num) === -1) {
    diffNum.push(num);
  }
});

console.log(diffNum.length);
