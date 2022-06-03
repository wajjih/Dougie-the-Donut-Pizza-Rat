console.log('Running Script');

console.dir(document)

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const intro = document.querySelector('#intro')
const bio = document.querySelector('.bio')
const lis = document.querySelectorAll('li')
const li = document.querySelector('li:nth-child(1)')
h1.style.fontFamily = 'Monospace'
h2.style.fontFamily = 'Monospace'

intro.style.backgroundColor = '#3498db'
intro.style.color = 'black'
intro.style.padding = '10px'
intro.style.fontSize = '18px'
intro.style.fontFamily = 'Roboto'
bio.style.backgroundColor = '#9b59b6'
bio.style.color = 'black'
bio.style.padding = '10px'
bio.style.fontSize = '18px'
bio.style.fontFamily = 'Roboto'
console.log(lis)

lis.forEach(i => {
    i.style.fontFamily = 'Monospace';
    i.style.fontSize = '18px'
})
console.dir(h1)
console.log(h1);
console.log(intro);
console.log(bio);
console.dir(lis)