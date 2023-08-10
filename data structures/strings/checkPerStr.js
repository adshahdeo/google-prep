function checkPerStr (str1, str2) {
    
    if (str1.length !== str2.length) return false;
    let obj1 = {};
    
    for (let char in str1) {
        obj1[char] = obj1[char] ? obj1[char]++ : 1;
    }

    for (let char in str2) {
        obj[char] = obj[char] ? obj[char]++ : 1;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}