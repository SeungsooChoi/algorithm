const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
const testcase = input.shift();

for (let i = 0; i < testcase; i++) {
  const [r, s] = input[i].split(" ");

  let result = "";
  for (let j = 0; j < s.length; j++) {
    for (let k = 0; k < r; k++) {
      result += s[j];
    }
  }
  console.log(result);
}
