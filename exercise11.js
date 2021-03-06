function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var num1 = 0
    var num2 = 0
    for (var i = 1; i < arr.length - 1; i++) {
        num1 = arr[i] - arr[i - 1]
        num2 = arr[i + 1] - arr[i]
        if (num1 !== num2) {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false