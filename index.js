const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use ((req, res) => {
   res.status(404).json({error: {message: 'data not found'}})
})

app.use((err, req, res) => {
   const status = err.status || 500
   res.status(status).json({error: err})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app