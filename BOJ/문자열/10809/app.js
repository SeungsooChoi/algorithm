const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
let max = "z".charCodeAt(0);
let result = "";

for (let i = 97; i <= max; i++) {
  let alpha = String.fromCharCode(i);

  result += input[0].indexOf(alpha) + " ";
}

console.log(result);
