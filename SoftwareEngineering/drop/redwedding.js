const starks = document.querySelectorAll('.starks')
console.log(starks)
// Create Two Functions -> addChild and redWedding
function addChild(){
    const e = document.querySelector('.starks')
    const a = document.createElement('div')
    a.textContent = 'Starks Child'
    e.appendChild(a)
    
}
// Attach functions to buttons
function remove(){
    const sE = document.querySelector('.starks')
    while(sE.firstChild){
        sE.removeChild(sE.firstChild)
    }
}