const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString();
let count = 0;

for (let i = 0; i < input.length; i++) {
  let c = input[i];
  if (c >= "W") {
    count += 10;
  } else if (c >= "T") {
    count += 9;
  } else if (c >= "P") {
    count += 8;
  } else if (c >= "M") {
    count += 7;
  } else if (c >= "J") {
    count += 6;
  } else if (c >= "G") {
    count += 5;
  } else if (c >= "D") {
    count += 4;
  } else if (c >= "A") {
    count += 3;
  }
}

console.log(count.toString());
