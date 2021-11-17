const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split(" ");

let first = Number(input[0].split("").reverse().join(""));
let second = Number(input[1].split("").reverse().join(""));

console.log(first > second ? first : second);
