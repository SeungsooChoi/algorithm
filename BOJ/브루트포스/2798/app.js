// 브루트포스 : 모든 경우의 수를 다 계산한다.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
let NM = input[0].split(" ").map(Number);
let N = NM.shift();
let M = NM.shift();
let cards = input[1].split(" ").map(Number);
let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];

      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}
console.log(max);
