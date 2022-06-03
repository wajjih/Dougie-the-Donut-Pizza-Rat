function* shuffle(array) {

    var i = array.length;

    while (i--) {
        yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }

}
var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10]);

console.log(ranNums.next().value);     // first random number from array
console.log(ranNums.next().value);
console.log(ranNums.next().value);
console.log(ranNums.next().value);
console.log(ranNums.next().value);
console.log(ranNums.next().value);
console.log(ranNums.next().value);
console.log(ranNums.next().value);
console.log(ranNums.next().value);
console.log(ranNums.next().value);