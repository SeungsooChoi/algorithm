const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = Number(fs.readFileSync(filePath).toString());

let distance = 1;
let total = 1;

while (input > total) {
  // 6 12 18 24 ...
  total += 6 * distance;
  distance++;
}

console.log(distance);
