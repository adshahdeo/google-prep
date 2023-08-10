// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


// Example 1:

// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.

// Example 2:

// Input:
// N = 4, K = 2
// arr[] = {1, 1, 1, 1}
// Output: 6
// Explanation: 
// Each 1 will produce sum 2 with any 1.

getPairsCount(arr){
    let pairs = 0;
    let obj = {};
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let diff = k - arr[i];
        if (obj.hasOwnProperty(diff)) pairs += obj[diff];

        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
   
    return pairs;
}