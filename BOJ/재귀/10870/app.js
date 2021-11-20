const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = Number(fs.readFileSync(filePath).toString());

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(input));
