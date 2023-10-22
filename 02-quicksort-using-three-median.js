function quickSort(nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let pivot = medianOfThree(nums[0], nums[mid], nums[nums.length - 1]);

  let left = [],
    right = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else if (nums[i] > pivot) {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function medianOfThree(a, b, c) {
  if ((a - b) * (c - a) >= 0) return a;
  else if ((b - a) * (c - b) >= 0) return b;
  else return c;
}

console.log(quickSort([-30, 0, 18, -50, 400, 2]));
