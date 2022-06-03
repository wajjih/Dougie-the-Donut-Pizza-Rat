//^Loads Express
const express = require('express')
const pokemonData = require('./models/pokemon')

const app = express()

const port = 3000

//& Sets up the view engine
app.set('view engine', 'ejs')
app.set('views', './views')



//*Routes
app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req,res)=>{
    res.render('index', {
        pageTitle: 'Pokemon',
        pageHeader: 'See all the Pokemon!',
        pokemonData
    })
})

app.get('/pokemon/:id', (req,res)=>{
    res.send(req.params.id)
})
 
app.listen(port, ()=>{
    console.log('Server is running...');
})




