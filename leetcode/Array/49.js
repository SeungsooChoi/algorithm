/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // aragram에 해당하는 친구들은 하나의 배열로 묶고
  // 나머지는 그냥 반환.
  let hash = {};
  strs.forEach((str) => {
    let letters = str.split("").sort();
    if (hash[letters]) {
      hash[letters].push(str);
    } else {
      hash[letters] = [str];
    }
  });

  const keys = Object.keys(hash);
  const values = keys.map((key) => hash[key]);
  return values;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
