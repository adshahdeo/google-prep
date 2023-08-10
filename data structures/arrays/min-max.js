// Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

// Example 1:

// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.
 

// Example 2:

// Input:
// N = 5
// A[]  = {1, 345, 234, 21, 56789}
// Output: 1 56789
// Explanation: minimum and maximum element of array are 1 and 56789.
 
/* solution function which takes the array A[] and its size N as inputs and 
returns the minimum and maximum element of the array. */

getMinMax = (arr, n) => [Math.min(...arr), Math.max(...arr)]