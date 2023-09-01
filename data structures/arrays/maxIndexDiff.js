// Given an array A[] of N positive integers. The task is to find the maximum of j - i subjected to the constraint of A[i] < A[j] and i < j.
 

// Example 1:

// Input:
// N = 2
// A[] = {1, 10}
// Output:
// 1
// Explanation:
// A[0]<A[1] so (j-i) is 1-0 = 1.
// Example 2:

// Input:
// N = 9
// A[] = {34, 8, 10, 3, 2, 80, 30, 33, 1}
// Output:
// 6
// Explanation:
// In the given array A[1] < A[7]
// satisfying the required 
// condition(A[i] < A[j]) thus giving 
// the maximum difference of j - i 
// which is 6(7-1).

maxIndexDiff(A, N) {
    let leftMinArr = new Array(N);
    let rightMaxArr = new Array(N);
    
    leftMinArr[0] = A[0];
    rightMaxArr[N - 1] = A[N - 1];
    
    for (let i = 1; i < N; i++) {
        leftMinArr[i] = Math.min(A[i], leftMinArr[i - 1]);
    }
    
    for (let i = N - 2; i >= 0; i--) {
        rightMaxArr[i] = Math.max(A[i], rightMaxArr[i + 1]);
    }
    
    let i = 0;
    let j = 0;
    let diff = -1;
    
    while (i < N && j < N) {
        if (leftMinArr[i] <= rightMaxArr[j]) {
            diff = Math.max(j - i, diff);
            j++;
        } else i++;
    }
    
    return diff;
    

}