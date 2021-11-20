const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = Number(fs.readFileSync(filePath).toString());
let result = "";

paintStars(input);
console.log(result);

function paintStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    result += "\n";
  }
}

function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    result += " ";
  } else {
    if (num === 1) {
      // input값이 3일때 바닥 다 찍음
      result += "*";
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}
