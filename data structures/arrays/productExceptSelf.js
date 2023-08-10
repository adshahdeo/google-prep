// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf (nums) {
    let zeroes = 0;
    let product = 1;
    let productArr = new Array(nums.length);
    
    for (let num of nums) {
        if (num === 0) zeroes++;
        else product *= num;
    }

    if (zeroes > 1) productArr.fill(0);

    else if (zeroes === 1) {
        for (let i in nums) {
            if (nums[i] === 0) productArr[i] = product;
            else productArr[i] = 0;
        }
    }

    else {
        for (let i in nums) {
            productArr[i] = product/nums[i];
        }
    }

    return productArr;
}
