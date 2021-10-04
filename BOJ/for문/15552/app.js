// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let answer = "";

solution(input);

function solution(arr) {
  for (let i = 1; i <= arr[0]; i++) {
    let tmp = arr[i].split(" ");
    answer += Number(tmp[0]) + Number(tmp[1]) + "\n";
  }
}
console.log(answer);
