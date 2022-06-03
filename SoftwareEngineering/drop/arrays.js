// Problem 1
// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// fourthItem = horror[3]
// // Write a console.log statement below to check your work!
// console.log(fourthItem)

//Problem 2
// const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];


//     netflixShows.push('Arcane')

// // Write a console.log statement below to check your work!
// console.log(netflixShows);

//Problem 3
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
for(let i = 0; i<synonyms.length;i++){
    greetings.push(`Have a ${synonyms[i]} day`)
}


// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
console.log(greetings);