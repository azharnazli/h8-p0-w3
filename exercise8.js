function pasanganTerbesar(num) {
    // you can only write your code here!
    var number = num.toString()
    var num1 = 0;
    for (var i = 0; i < number.length; i++) {
        if (num1 < number[i] + number[i + 1]) {
            num1 = number[i] + number[i + 1]
        }
    }
    return Number(num1)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99