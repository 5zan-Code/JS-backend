const express = require('express')
const app = express();
const colors = require('colors')
const morgan = require('morgan')
const data = require('./models/data')
const jokes = require('./models/jokes')

const port = 5000


app.use(morgan('combined'))

app.get('/', (req,res)=> {
    res.send('Hello World')
})

app.get('/twitter', (req,res)=> {
    res.send('This is a twitter page')
})

app.get('/login', (req,res)=> {
    res.send("This is a login page!")
})

app.get('/data', (req,res) =>{
    res.send(data)

})

app.get('/api/jokes', (req,res)=>{
    res.send(jokes)
})

app.listen(port, ()=> {
    console.log(`Server start spining at -> 'http://localhost:${port}'`.green.bgBlack)
})