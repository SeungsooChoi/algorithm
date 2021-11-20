// 여러번 풀어볼것 시간 지나고
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let N = Number(fs.readFileSync(filePath).toString());
let K = 0; // 옮긴 횟수
let processArr = [];

hanoi(N, 1, 2, 3);
console.log(K);
console.log(processArr.map((item) => item.join(" ")).join("\n"));

function hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  }
  // 개수보다 하나 적은 애들을 나머지로 다 이동
  hanoi(num - 1, from, to, other);
  // 맨 아래를 목적지로
  processArr.push([from, to]);
  K++;
  hanoi(num - 1, other, from, to);
}
