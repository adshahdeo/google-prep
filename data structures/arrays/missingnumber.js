// You are given an array arr[] of N integers. The task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1.

// Example 1:

// Input:
// N = 5
// arr[] = {1,2,3,4,5}
// Output: 6
// Explanation: Smallest positive missing 
// number is 6.
// Example 2:

// Input:
// N = 5
// arr[] = {0,-10,1,3,-20}
// Output: 2
// Explanation: Smallest positive missing 
// number is 2.

function missingNumber(arr, n) {
    let newArr = new Array(n + 1).fill(false);
        
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0 && arr[i] <= n) {
            newArr[arr[i]] = true;
        }
    }
    
    for (let i = 1; i <= n; i++) {
        if (!newArr[i]) return i;
    }
    
    return n + 1;
}