// Problem 1
for(let i=1; i <=10; i += 2){
    console.log(i)
    if(i===9){
        i = 0
    }
}

//Problem 2
for(let i=10;i>=1;i--){
    console.log(i);
}

//Problem 3
for(let i = 6; i<=60; i +=3){
    console.log(i);
}

//Problem 4
for(let i=0; i<=10;i++){
    if(i%2 === 0){
        console.log(i);
    }
}

//Problem 5
 for(let i=1;i<=20;i++){
     //prime number
    if (i%i === 0 && i%2 !== 0 && i%3 !== 0 && i%4 !== 0){

        console.log(`Prime ${i}`);
    
    }else if(i=== 2){
        console.log(`Prime ${i}`);
        
    }else if(i === 3){
        console.log(`Prime ${i}`);
     
    }else if(i%2 === 0){
    console.log(`Even ${i}`); //Even number
    
    }else if(i%2 !== 0 ){ 

        console.log(`Odd ${i}`);//Odd number
    }
    
 }

//Problem 6
for (let i = '#'; i.length <=7; i+='#') {
    console.log(i);
}