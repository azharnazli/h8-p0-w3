function targetTerdekat(arr) {
    var indexO;
    var indexX;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            indexO = i
        }
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === "x") {
                indexX = j
                break
            }
        }
        if (indexX < indexO) {
            for (var k = 0; k < arr.length; k++) {
                indexX = k
            }
        }
    }
    if (indexX === undefined || indexO === undefined) {
        return 0
    } else {
        return Math.abs(indexO - indexX)
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2