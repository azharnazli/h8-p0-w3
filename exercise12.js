function tentukanDeretGeometri(arr) {
    var num1 = 0
    var num2 = 0
    for (var i = 0; i < arr.length - 1; i++) {
        num1 = arr[i] / arr[i + 1]
        for (var j = 0; j < arr.length - 1; j++) {
            num2 = arr[j] / arr[j + 1]
            if (num1 != num2) {
                return false
            }
        }
    }
    return true
};

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false