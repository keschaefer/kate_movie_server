const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
   queries.listAll().then(movies => {res.send(movies)})
})

app.post('/', (req, res) => {
   queries.addMovie(req.body).then(movie => {
      res.send(movie)
   })
})

app.delete('/:id', (req, res) => {
   queries.deleteMovie(req.params.id).then(res.send({message: 'movie deleted'}))
})

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