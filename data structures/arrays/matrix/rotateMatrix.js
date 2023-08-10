let m = [
[1,2,3],
[3,4,5],
[6,7,8]
];

function rotate(m, dir) {
    let newMatrix = [];
    let width = m[0].length;
    let height = m.length;

    if (dir === 'left') {
        for (let j = width - 1; j >= 0; j--) {
            let arr = [];
            for (let i = 0; i < height; i++) {
                arr.push(m[i][j]);
            }
            newMatrix.push(arr);
        }
    } else {
        for (let j = 0; j < width; j++) {
            let arr = [];
            for (let i = height - 1; i >= 0; i--) {
                arr.push(m[i][j]);
            }
            newMatrix.push(arr);
        }
    }

    return newMatrix;
}

console.log(rotate(m, 'left'));
console.log(rotate(m, 'right'));