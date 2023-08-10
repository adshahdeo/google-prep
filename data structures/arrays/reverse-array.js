// reverse an input array

solution = (arr) => {
    let newArr = [];
    while (arr.length) newArr.push(arr.pop())
    return newArr;
}