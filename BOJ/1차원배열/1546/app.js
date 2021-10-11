const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const n = input[0];
const score = input[1].split(" ").map((n) => Number(n));
let highScore = 0;
let fakeScore = 0;

for (let i = 0; i < n; i++) {
  if (highScore < score[i]) {
    highScore = score[i];
  }
}

for (let i = 0; i < n; i++) {
  fakeScore += (score[i] / highScore) * 100;
}

console.log(fakeScore / n);
