function subtractTwo(num){
    return num -=2
}


function map(array,callback){
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(callback(array[i]))
        
    }
    return arr
}

console.log(map([3,4,5], subtractTwo)) //-> [1,2,3]

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]