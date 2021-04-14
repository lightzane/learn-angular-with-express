const express = require('express')
const app = express()
const port = process.env.port || 3000

// staples
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// static at public
// app.use(express.static('./public'))
// app.get('/', (req,res)=>res.sendFile('./public/index.html'))

// direct to the dist folder
app.use(express.static('./../dist'))
app.get('/', (req,res)=>res.sendFile('./../dist/index.html'))

// GET /api
app.use('/api', require('./routes/api'))


app.listen(port, ()=>{
    console.log(`Server listening to port ${port}`)
})