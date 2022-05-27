//default limit
let limit = 10;
//
var policeData;
var clicked = false
var mainContainer = document.getElementById('response')
var othContainer;
const btn = document.getElementById("boroughBtn");

// when clicked it generates the data based on boroug
btn.addEventListener("click", (event) => {
  // console.log(button has been clicked);
  
  console.log(event)
  event.preventDefault();
  let boroughs = event.path[0].innerHTML
  console.log(boroughs);
  // user input needs to be stored somewhere
  //removedd + before document
  let userInput = +document.getElementById("userInput").value;
  if (userInput === 0 ){
      userInput=limit;
  }
  console.log(userInput);
  othContainer = document.getElementById('response')
  mainContainer = document.getElementById("data");
  
  // Deletes nodes before the next data fetch
  while (mainContainer.hasChildNodes()) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  

  // fetching data
  fetch(`https://data.cityofnewyork.us/resource/cwy2-px8b.json?agency=NYPD&borough=${boroughs.toUpperCase()}&$limit=${userInput}
  `)
    .then((response) => response.json())
    .then((data) => (policeData = data))
    .then(() => {
    
        // fetches data based on requested amount and then displays underneath
      for (i = 0; i < policeData.length; i++) {
        var divOne = document.createElement("div");
        var divTwo = document.createElement("div");
        var divThree = document.createElement("div");
        var divFour = document.createElement('div');
        var disBtn = document.createElement('button')
        
        
        

        divOne.innerHTML = `resolution description: ${policeData[i].resolution_description}`;
        divTwo.innerHTML =  `borough: ${policeData[i].borough}` ;
        divThree.innerHTML =  `descriptor: ${policeData[i].descriptor}`;
        disBtn.innerHTML = 'What did the police do?'
        
        
        //userGrid.querySelector(`div[data-id='${shotFired}']`)
        
        // mainContainer.appendChild(divOne);
        //mainContainer.appendChild(divTwo);
        mainContainer.appendChild(divThree);
        mainContainer.appendChild(disBtn)
        mainContainer.appendChild(divOne)
        divOne.style.visibility = 'hidden'
        disBtn.onclick = function(event){
            console.log(event);
            event.target.nextSibling.attributes.style.value = 'visibility: visible'
            console.log(event.target.nextSibling.attributes.style.value);
            

            
        }
      }
      
    //   document.querySelector('.oompa').addEventListener("click", function() {
    //     console.dir(mainContainer);
    // })
     
      console.log(event)
    })
    .catch((err) => console.log(err));
});




  

// brooklyn.addEventListener('click', () => )
// queens.addEventListener('click', () => )
// statenisland.addEventListener('click', () => )
// bronx.addEventListener('click', () => )
















