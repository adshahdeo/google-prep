function uniqueStr (str) {
    let obj = {};

    for (let char in str) {
        if (obj[str]) return false;
        else obj[str] = true;
    }

    return true;
}