const database = require("./database-connections")

module.exports = {
   listAll(){
      return database("movies")
   },
   getMovieById(id) {
      return database("movies").where({id: id})
   },
   addMovie(movie) {
      return database("movies").insert(movie).returning('*')
   },
   changeMovie(id, movie) {
      return database("movies").where({id: id}).update(movie).returning("*")
   },
   deleteMovie(id) {
      return database("movies").where({id: id}).delete()
   }
}