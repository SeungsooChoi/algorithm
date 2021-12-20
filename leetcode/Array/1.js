/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // nums 배열중에 더해서 target이 되는 두 수의 index를 리턴.
  // 시간복잡도에서 이중배열 안써볼것.
  let left = 0;
  let right = 1;

  while (left <= nums.length) {
    // right 끝까지 다돌면 left 증가
    if (right === nums.length) {
      left++;
      right = left + 1;
    }

    // 합이 target과 같으면 인덱스 반환
    if (nums[left] + nums[right] === target) {
      return [left, right];
    }

    right++;
  }
};

/**
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */
console.log(twoSum([2, 7, 11, 15], 9));
