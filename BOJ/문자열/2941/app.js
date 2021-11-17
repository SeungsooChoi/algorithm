const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

const list = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let item of list) {
  input = input.split(item).join("a");
}

console.log(input.length);
