const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = Number(fs.readFileSync(filePath).toString());
let result = 1;

for (let i = input; i > 0; i--) {
  result *= i;
}

console.log(result);
