
// You are given two sorted arrays of distinct integers nums1 and nums2.

// A valid path is defined as follows:

// Choose array nums1 or nums2 to traverse (from index-0).
// Traverse the current array from left to right.
// If you are reading any value that is present in nums1 and nums2 you are allowed to change your path to the other array. (Only one repeated value is considered in the valid path).
// The score is defined as the sum of uniques values in a valid path.

// Return the maximum score you can obtain of all possible valid paths. Since the answer may be too large, return it modulo 109 + 7.


// Example 1:
// Input: nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]
// Output: 30
// Explanation: Valid paths:
// [2,4,5,8,10], [2,4,5,8,9], [2,4,6,8,9], [2,4,6,8,10],  (starting from nums1)
// [4,6,8,9], [4,5,8,10], [4,5,8,9], [4,6,8,10]    (starting from nums2)
// The maximum is obtained with the path in green [2,4,6,8,10].

// Example 2:
// Input: nums1 = [1,3,5,7,9], nums2 = [3,5,100]
// Output: 109
// Explanation: Maximum sum is obtained with the path [1,3,5,100].

// Example 3:
// Input: nums1 = [1,2,3,4,5], nums2 = [6,7,8,9,10]
// Output: 40
// Explanation: There are no common elements between nums1 and nums2.
// Maximum sum is obtained with the path [6,7,8,9,10].

var maxSum = function(nums1, nums2) {
    let arr1Sum = 0;
    let arr2Sum = 0;

    let sum = 0;
    let i = 0, j = 0;
    
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] === undefined) {
            arr2Sum += nums2[j];
            j++;
            continue;
        } else if (nums2[j] === undefined) {
            arr1Sum += nums1[i];
            i++;
            continue;
        }
        if (nums1[i] < nums2[j]) {
            arr1Sum += nums1[i];
            i++;
        } else if (nums1[i] > nums2[j]) {
            arr2Sum += nums2[j];
            j++;
        } else {
            sum += nums1[i] + Math.max(arr1Sum, arr2Sum);
            arr1Sum = 0;
            arr2Sum = 0;
            i++;
            j++;
        }
    }
    sum += Math.max(arr1Sum, arr2Sum);
    
    return sum%1000000007;
};