function palindrome(kata) {
    var word = kata;
    var tmp = kata.split("").reverse().join("")
    if (word === tmp) {
        return true
    } else {
        return false
    }


}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false