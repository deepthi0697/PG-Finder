const express = require('express')
const app = express()
const PORT = 3040
const setUpDB = require('./config/database')
const routes = require('./config/routes')

app.use(express.json())
setUpDB()

app.use('/', routes)


app.listen(PORT, (req,res) => {
    console.log('listening on port', PORT)
})
