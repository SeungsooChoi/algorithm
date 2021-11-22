const arr = Array(10000).fill(0);

function d(n) {
  const strNum = String(n);
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += Number(strNum[i]);
  }
  return n + sum;
}

for (let i = 1; i <= 10000; i++) {
  const result = d(i);
  //10000보다 작거나 같은 셀프 넘버
  if (result <= 10000) {
    arr[result]++;
  }
}

for (let i = 1; i <= 10000; i++) {
  if (arr[i] === 0) {
    console.log(i);
  }
}
