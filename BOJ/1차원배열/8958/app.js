const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let score = 0;
  let count = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    score += count;
  }
  console.log(score);
}
