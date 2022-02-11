/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // stack을 이용해서 풀이해보자
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < s.length; i++) {
    if (keys.includes(s[i])) {
      // 괄호 앞부분에 해당하는 문자, stack에 push
      stack.push(s[i]);
    } else {
      // 괄호 뒷부분에 해당하는 문자,
      // stack의 top과 짝이 맞다면 stack pop
      // 짝이 맞지않으면 false 리턴.
      if (obj[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
};

console.log(isValid("()[]{}"));
// 다시 풀어봄.
// 자료구조를 생각해보면서 풀것
