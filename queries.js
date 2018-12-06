const database = require('./database-connection')

module.exports = {
   listAll(){
      return database('movies')
   },

   addMovie(movie){
      return database('movies').insert(movie).returning('*')
   },

   deleteMovie(id){
      return database('movies').where({id: id}).delete()
   }
}