//Problem 1
let addTwo = (num)=>{
    return num + 2
}
console.log(addTwo(3));

//Problem 2
let addS = (str)=>{
    return str +'s'
}
console.log(addS('Cake'));

//Problem 3
let sayHello = (str) =>{
    return `Hi, ${str}`
}
console.log(sayHello('That is crazy'));

//Problem 4
let wereAwesome = (cm, me) =>{
    return `${cm} and ${me} are awesome!`
}
console.log(wereAwesome('An','Wajjih'));

//Problem 5
let isOdd = (num)=>{
    if(num%2 !== 0){
        return true
    }else{
        return false
    }
}
console.log(isOdd(3));