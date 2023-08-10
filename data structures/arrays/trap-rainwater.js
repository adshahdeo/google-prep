// Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 


// Example 1:

// Input:
// N = 6
// arr[] = {3,0,0,2,0,4}
// Output:
// 10

// Example 2:

// Input:
// N = 4
// arr[] = {7,4,0,9}
// Output:
// 10
// Explanation:
// Water trapped by above 
// block of height 4 is 3 units and above 
// block of height 0 is 7 units. So, the 
// total unit of water trapped is 10 units.
// Example 3:

// Input:
// N = 3
// arr[] = {6,9,9}
// Output:
// 0
// Explanation:
// No water will be trapped.

function trappingWater(arr, n) {

    let leftArr = new Array(n);
    let rightArr = new Array(n);
    let sum = 0;

    leftArr[0] = arr[0];
    for (let i = 1; i < n; i++) {
        leftArr[i] = Math.max(arr[i], leftArr[i - 1]);
    }
    
    rightArr[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightArr[i] = Math.max(arr[i], rightArr[i + 1]);
    }
    
    for (let i = 0; i < n; i++) {
        sum += Math.min(leftArr[i], rightArr[i]) - arr[i];
    }
    
    return sum;
}