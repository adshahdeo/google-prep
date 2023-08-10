// Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.
// Example 2:

// Input:
// N = 10, S = 15
// A[] = {1,2,3,4,5,6,7,8,9,10}
// Output: 1 5
// Explanation: The sum of elements 
// from 1st position to 5th position
// is 15.
// Your Task:
/* function subarraySum() takes arr, N, and S as input parameters and returns an ArrayList 
containing the starting and ending positions of the first such occurring subarray from the left where sum equals to S.
The two indexes in the array should be according to 1-based indexing.
If no such subarray is found, return an array consisting of only one element that is -1. */

function subarraySum(arr, n, s) {
    let sum = 0;
    let j;
    let i = 0
    if (s === 0) {
        return [-1];
    }
    if (s === arr[0]) {
        return [1,1];
    }
    
    for (let i = 0; i < n; i++) {
        if (sum < s) {
            sum += arr[i];
            j = i;
        }
    }
    
    while (j < n) {
        if (sum === s) {
            return [i + 1, j + 1];
        } else if (sum < s) {
            j++;
            sum += arr[j];
        } else {
            sum -= arr[i];
            i++;
        }
    }
    
    return [-1];
}