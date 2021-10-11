const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let cases = input[i].split(" ");
  let studentN = Number(cases[0]);
  let sum = 0;

  for (let j = 1; j <= studentN; j++) {
    sum += Number(cases[j]);
  }

  let average = sum / studentN;

  let highScoreStudents = 0;
  for (let k = 1; k <= studentN; k++) {
    if (average < cases[k]) {
      highScoreStudents++;
    }
  }

  const percentage = ((highScoreStudents / studentN) * 100).toFixed(3);
  console.log(`${percentage}%`);
}
