const express = require('express')
const app = express()
app.use(express.json())  // replaces body-parser

require('./models');

// set up author routes
const authorRouter = require('./routes/authorRouter')

//GET home page
app.get('/', (req,res) => {
    res.send('<h1>Library Systems</h1>')
})

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/author-management', authorRouter)

app.listen(process.env.PORT || 3000, () => { 
    console.log("The library app is running!")
})