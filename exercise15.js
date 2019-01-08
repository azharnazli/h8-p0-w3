function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort()
    var result = []
    var idx = 0
    for (var i = 0; i < animals.length; i++) {
        if (result.length === 0) {
            result.push([animals[i]])
        } else if (result[idx][0][0] === animals[i][0]) {
            result[idx].push(animals[i])
        } else {
            result.push([animals[i]])
            idx++
        }
    }
    return result
}






// TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]