/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  // 더 많은 양의 물을 담아야 함.
  // maximum 값을 찾는 아래의 수식을 안다면 다중 포인터를 사용하여 풀기 좋은 문제..!
  let maximum = (end - start) * Math.min(height[start], height[end]);

  while (start < end) {
    if (height[start] <= height[end]) {
      start++;
    } else {
      end--;
    }

    maximum = Math.max(
      maximum,
      (end - start) * Math.min(height[start], height[end])
    );
  }
  return maximum;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// [1,8,6,2,5,4,8,3,7]
//    v             v
//    v
