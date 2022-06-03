let person ={
    firstName: 'wajjih',
    lastName: 'Muhammadd',
    age: 20,
    address: 'unknown',
    state: 'NY',
    zipcode: '11230'
}

let a = 10;
let b = 2;
let c = 5;
let d = 6;
let e = 7;
let f = 8;
let g = 9;
let h = 13;
let i = 14;
let j = 15;
let k = 16;


const array = [a,b,c,d,e,f,g,h,i,j,k];
let total = 0;
for (let i = 0; i < array.length; i++) {
     total += array[i];
}
let avg = total/array.length;

console.log(avg);
