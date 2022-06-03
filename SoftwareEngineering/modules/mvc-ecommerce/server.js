// load the package express
const express = require('express')

// create an instance of express
const app = express()

const getData = require('./controllers/getData')
const productData = getData()

app.use((req,res,next)=>{
    console.log(`Running middleware function!!!`);
    next()
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Setup view engine
app.set('view engine', 'ejs')
app.set('views', './Views')


app.get('/', (req, res)=>{
    res.render('home', {pageTitle: 'Home Page', pageHeader: 'Home Head'})
})

app.get('/products', (req,res)=>{
    res.render('products', {data: productData, pageTitle: 'Product'})
})

app.get('/products/new', (req,res)=>{
    res.render('new-products',)
})

app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
})
