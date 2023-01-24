var binarySearch = function(nums, left, right, target) {
  while(left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const foundVal = nums[midIndex];
    if(foundVal === target) {
      return midIndex;  
    } else if(target < foundVal) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
}

function quickSelect(nums, left, right, indexToFind) {
  const partitionIndex = partition(nums, left, right);
  if(partitionIndex === indexToFind) {
    return nums[partitionIndex];
  } else if(indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind);
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind);
  }
}

function quickSort(nums, left, right) {
  if (left < right) {
    const pivotIndex = partition(nums, left, right);
    quickSort(nums, left, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, right);
  }
}

function partition (nums, left, right) {
  const pivotElement = nums[right];  
  let partitionIdx = left;
  for (let j = left; j < right; j++){
    if (nums[j] < pivotElement){
      [nums[partitionIdx], nums[j]] = [nums[j], nums[partitionIdx]]
      partitionIdx++;
    }
  }
  [nums[partitionIdx], nums[right]] = [nums[right], nums[partitionIdx]]
  return partitionIdx;
}

const nums = [5, 3, 1, 6, 4, 2];
const n = nums.length;
quickSort(nums, 0, n - 1);

module.exports = { quickSort, quickSelect, binarySearch };
