const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
const testCase = input.shift();
let result = 0;

for (let i = 0; i < testCase; i++) {
  const word = input[i];
  const letter = [];
  let isGroup = true;
  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      // 없을경우
      letter.push(word[j]);
    } else {
      // letter.indexOf(word[j])가 letter배열의 마지막요소가 아니라면 다시 발견된 경우
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroup = false;
        break;
      }
    }
  }
  if (isGroup) {
    result++;
  }
}

console.log(result);
