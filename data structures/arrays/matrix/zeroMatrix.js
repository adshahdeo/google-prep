let m = [
    [1,2,3],
    [4,0,0],
    [7,8,9]
];

console.log(zeroMatrix(m));

function zeroMatrix (m) {
    let height = m.length;
    let width = m[0].length;

    let iArr = [];
    let jArr = [];

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (m[i][j] === 0) {
                iArr.push(i);
                jArr.push(j);
            }
        }
    }

    return setZeroes(m, iArr, jArr, height, width);
}

function setZeroes (m, iArr, jArr, height, width) {
    for (let x of jArr) {
        for (let i = 0; i < height; i++) {
            m[i][x] = 0;
        }
    }
    
    for (let x of iArr) {
        for (let j = 0; j < height; j++) {
            m[x][j] = 0;
        }
    }

    return m;
}