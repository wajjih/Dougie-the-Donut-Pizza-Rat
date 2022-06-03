

for(let i = 0; i<=100; i++){
    //Fizzbuzz
    if(i%3 === 0 && i%5 === 0){
        console.log(i+" FizzBuz")
    //Fizz
    }else if(i%3 === 0){
        console.log(i+" Fizz");
    //Buzz
    }else if(i%5 === 0){
        console.log(i+" Buzz");
    }else{
        console.log(i);
    }
}