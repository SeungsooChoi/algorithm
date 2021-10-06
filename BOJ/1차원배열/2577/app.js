const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let number = Number(input[0]) * Number(input[1]) * Number(input[2]);

for (let i = 0; i < 10; i++) {
  let count = number.toString().split(i).length;
  console.log(count - 1);
}
