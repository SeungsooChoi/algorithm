const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split(" ");

let answer = "";
for (let i = 0; i < input; i++) {
  for (let j = 0; j < input - i - 1; j++) {
    answer += " ";
  }
  for (let k = 0; k <= i; k++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);
