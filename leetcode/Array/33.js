/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // nums는 정수 배열이고 오름차순 정렬되어있음. (중복 없음)
  // nums에서 target을  찾는것
  // O(log n)runtime complexity만 맞추면 쉬운문제
  // 쫄아서 이게 맞는건가 생각했음.

  return nums.indexOf(target);
};

/**
 * 
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 */
