function angkaPalindrome(num) {
    var check = false
    if (num < 10) {
        return ++num
    } else {
        while (check === false) {
            var tmp = num.toString().split("").reverse().join("")
            if (tmp == num) {
                check = true
                return num
            } else {
                num++
            }
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001