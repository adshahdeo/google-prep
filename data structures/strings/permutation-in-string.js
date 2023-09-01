// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) {
        return false;
    }
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i in s1) {
        map1.set(s1[i], map1.get(s1[i]) + 1 || 1);
        map2.set(s2[i], map2.get(s2[i]) + 1 || 1);
    }

    let left = 0;
    let right = s1.length - 1;

    while (right < s2.length) {
        if (compare(map1, map2)) return true;
        
        const lastChar = s2[left];
        let lastVal = map2.get(lastChar);
        
        if (lastVal > 1) map2.set(lastChar, lastVal - 1);
        else map2.delete(lastChar);

        right++;
        left++;

        const newChar = s2[right];
        let newVal = map2.get(newChar);
        map2.set(newChar, newVal + 1 || 1);
    }
    return false;
};

function compare(map1, map2) {
    for(let key of map1.keys()) {
       if(map1.get(key) !== map2.get(key)) {
            return false;
        } 
    }
    return true;
}