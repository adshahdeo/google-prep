// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let len = 0;
    let tmp = 0;
    let map = new Map();
    for (let char of s) {
        if (map.has(char)) {
            len = Math.max(tmp, len);
            for (let [key] of map) {
                tmp--;
                map.delete(key);
                if (key === char) {
                    break;
                }
            }
        }
        map.set(char, true);
        tmp++;
    }

    return Math.max(tmp, len);
};