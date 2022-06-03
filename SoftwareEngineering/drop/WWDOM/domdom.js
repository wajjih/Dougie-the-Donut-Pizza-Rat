//step 1
const mainTitle = document.querySelector('#main-title')
mainTitle.textContent = 'Short Dom'

//step 2
document.body.style.backgroundColor = 'red' 

//step 3
const lastItem = document.querySelector('#favorite-things')
console.log(lastItem.lastElementChild);
lastItem.removeChild(lastItem.lastElementChild)

//step 4
const spc = document.querySelectorAll('.special-title')
console.dir(spc);
spc.forEach(item =>{
 console.dir(item);
   item.style.fontSize = '2rem'
})

//step 5
const chic = document.querySelector('#past-races')      
ago = chic.childNodes[7]  
ago.parentNode.removeChild(ago) 
  

//step 6
const newLi = document.querySelector('#past-races')
const newElement = document.createElement('li')
newElement.textContent = 'Tampa'
newLi.appendChild(newElement)

//step 7
const div = document.createElement('div')
div.className= 'blog-post'
const h1 = document.createElement('h1')
const p = document.createElement('p')

h1.textContent = 'Yours truly'
p.textContent = 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.'
document.body.appendChild(div)
div.appendChild(h1)
div.appendChild(p)
