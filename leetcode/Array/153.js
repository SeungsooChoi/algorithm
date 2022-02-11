/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 알고보니 가장 작은 요소 반환.
  // 시간복자도 O(n)을 요구하므로 1회 순환만 하고 찾자.
  let min = 5000;
  nums.forEach((num) => {
    if (min > num) min = num;
  });

  return min;
};

console.log(findMin([3, 4, 5, 1, 2]));
